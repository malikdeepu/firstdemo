const users = [
    {
      id: 1,
      pswd: "abc",
    },
    {
      id: 2,
      pswd: "etc",
    },
    {
      id: 3,
      pswd: "mpl",
    },
    {
      id: 4,
      pswd: "xyz",
    },
    {
      id: 5,
      pswd: "jkl",
    },
  ];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === 5 && users[i].pswd === "jkl") {
      console.log("success");
    } 
  }