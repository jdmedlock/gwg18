/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Write a while loop that counts down from 60 seconds and:
 * - If there's a task being completed, it prints out the task
 * - If there is no task being completed, it prints out the time as "T-x seconds"
 * 
 * NASA's countdown to launch includes checkpoints where NASA engineers
 * complete certain technical tasks. During the final minute, NASA has 6 tasks
 * to complete. Print the task name instead of "T-x seconds".
 * 
 * Using a while loop, print out the countdown output above.
 */

var countDownSecond = 60;

while (countDownSecond >= 0) {
  switch (countDownSecond) {
    case 50:
      console.log('Orbiter transfers from ground to internal power');
      break;
    case 31:
      console.log('Ground launch sequencer is go for auto sequence start');
      break;
    case 16:
      console.log('Activate launch pad sound suppression system');
      break;
    case 10:
      console.log('Activate main engine hydrogen burnoff system');
      break;
    case 6:
      console.log('Main engine start');
      break;
    case 0:
      console.log('Solid rocket booster ignition and liftoff!');
      break;
    default:
      console.log('T-' + countDownSecond + ' seconds');
  }
  countDownSecond--;
}