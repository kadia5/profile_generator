const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = [];

rl.question("What is your name? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answers.name = answer;

  rl.question("What do you like doing? ", (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    answers.activity = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answers.music = answer;

      rl.question("Which meal is your favourite? ", (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
        answers.meal = answer;

        rl.question(
          "What is your fav thing to eat for that meal? ",
          (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
            answers.food = answer;

            rl.question("Which sport is your fav? ", (answer) => {
              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback: ${answer}`);
              answers.sport = answer;

              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at!? ",
                (answer) => {
                  // TODO: Log the answer in a database
                  console.log(
                    `Thank you for your valuable feedback: ${answer}`
                  );
                  answers.powers = answer;

                  rl.close();
                  console.log(
                    `Hello,${answers.name}! I hear you like doing ${answers.activity} while listening to ${answers.music}, while eating ${answers.food} at ${answers.meal}, watching ${answers.sport} on tv and thinking about if you had ${answers.powers}`
                  );
                }
              );
            });
          }
        );
      });
    });
  });
});
