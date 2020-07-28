const spinner = [ "|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let when = 100;
for (let item of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, when);
  when += 200;
}