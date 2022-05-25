#!/usr/bin/env node

// all imports made here
import boxen from "boxen";
import chalk from "chalk";
import logSymbols from "log-symbols";

// all declarations made here
const y = chalk.yellow;
const g = chalk.grey;
const c = chalk.cyan;
const b = chalk.bold;

// card options set here
const cardOptions = {
  padding: 1,
  margin: 1,
  borderColor: "magenta",
};

// setting up the content
const content = `${"Hello Buddies.."}
${chalk.cyan.inverse.bold(
  "I am " +
    chalk.white.bgMagenta.bold("Ashishkumar Vishwakarma") +
    ", a Foodie & Trekker from Pune, MH, India !"
)}
               
     ${c("Work")}   Senior Software Engineer, Consultant & Tutor
${c("Community")}   ${y("https://codecasm.com")}
      ${c("Web")}   ${y("https://codecasm.com/blogs/about/")}
  ${c("Twitter")}   ${y("https://twitter.com/dev_ashishkumar")}
   ${c("GitHub")}   ${y("https://github.com/codecasm")}
 ${c("LinkedIn")}   ${y("https://linkedin.com/in/ashishkumarv3")}
  ${c("YouTube")}   ${y("https://www.youtube.com/codecasm")}

  ${c("Skills")}    ${y(`These are my Skills:
                HTML: ${chalk.green("70%")}
                CSS: ${chalk.red("40%")}
                JavaScript: ${chalk.green("60%")}
                TypeScript: ${chalk.green("65%")}
                Angular: ${chalk.green("60%")}
                NodeJS: ${chalk.red("20%")}`)}

    ${chalk.inverse(logSymbols.success, "Be Happy and continue CODING.. ")}
      
     ${c("Card")}   ${c("npx ashishkumar")}`;

const card = boxen(content, cardOptions);

console.log(card);

// slice argv as we don't need the first two elements (in this case)
const args = process.argv.slice(2, process.argv.length);
// console.log(args,args.length)

const action = args[0]; // first argument
const a1 = args[1]; // second argument
const b1 = args[2]; // third argument

if (action === "--help") {
  console.log(
    chalk(
      "\nPlease " +
        chalk.cyan("WhatsApp Ashishkumar") +
        " or mail at " +
        chalk.cyan("ashishkumar@codecasm.com")
    )
  );
} else if (action) {
  console.log(
    chalk.red(
      "Bhai, if you need help - ye try kar le " +
        chalk.white.inverse(" npx ashishkumar --help ")
    )
  );
} else {
  console.log(
    chalk
      .hex("#DEADED")
      .bold(
        "Thank you !! Please visit " +
          chalk.white.bgCyan.underline.bold("https://codecasm.com")
      )
  );
}

process.exit(0); // 0 means there were no errors
