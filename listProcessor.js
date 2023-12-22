function listProcessor(dataCommands) {
  let result = [];

  const processing = () => {
    const add = (str) => result.push(str);
    const remove = (str) => (result = result.filter((y) => y !== str));
    const print = () => console.log(result);
    return { add, remove, print };
  };
  dataCommands.forEach((element) => {
    const [commands, str] = element.split(" ");
    let funCall = processing.call();
    funCall[commands](str);
  });
}

// ------------- sol2-----------------//

function listProcessor(dataCommands) {
  let result = [];
  const obj = {
    add(str) {
      result.push(str);
    },
    remove(text) {
      result = result.filter((x) => !x.includes(text));
    },
    print() {
      console.log(result.join(',')); //
    },
  };
  dataCommands.forEach((element) => {
    const [commands, str] = element.split(" ");
    obj[commands](str);
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
