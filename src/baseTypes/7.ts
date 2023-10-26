/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayWeekend    {
  Sun= 'Sun',
  Mon= 'Mon',
  Tue= 'Tue',
  Wed= 'Wed',
  Thu = 'Thu',
  Fri= 'Fri',
  Sat= 'sat',
   
};
function isWeekend(day: DayWeekend):boolean {
  if (day===DayWeekend.Sun||day===DayWeekend.Sat) {
    return true
  } else {
    return false
  }
}