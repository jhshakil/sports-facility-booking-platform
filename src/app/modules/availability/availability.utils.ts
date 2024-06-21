import { TAvailableTime } from './availability.interface';

// Function to convert time string to minutes since midnight
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// Function to convert minutes since midnight to time string
function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const mins = (minutes % 60).toString().padStart(2, '0');
  return `${hours}:${mins}`;
}

// Find available slots given a list of booked slots
export default function findAvailableSlots(
  bookedSlots: TAvailableTime[],
  dayStart: string = '00:00',
  dayEnd: string = '23:59',
): TAvailableTime[] {
  const availableSlots: TAvailableTime[] = [];
  const dayStartMinutes = timeToMinutes(dayStart);
  const dayEndMinutes = timeToMinutes(dayEnd);

  // Sort the booked slots by start time
  bookedSlots.sort(
    (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime),
  );

  // Check for available slots before the first booked slot
  if (timeToMinutes(bookedSlots[0].startTime) > dayStartMinutes) {
    availableSlots.push({
      startTime: dayStart,
      endTime: bookedSlots[0].startTime,
    });
  }

  // Check for available slots between booked slots
  for (let i = 0; i < bookedSlots.length - 1; i++) {
    const endCurrentSlot = timeToMinutes(bookedSlots[i].endTime);
    const startNextSlot = timeToMinutes(bookedSlots[i + 1].startTime);
    if (endCurrentSlot < startNextSlot) {
      availableSlots.push({
        startTime: minutesToTime(endCurrentSlot),
        endTime: minutesToTime(startNextSlot),
      });
    }
  }

  // Check for available slots after the last booked slot
  if (
    timeToMinutes(bookedSlots[bookedSlots.length - 1].endTime) < dayEndMinutes
  ) {
    availableSlots.push({
      startTime: bookedSlots[bookedSlots.length - 1].endTime,
      endTime: minutesToTime(dayEndMinutes),
    });
  }

  return availableSlots;
}
