const lawyers = [
    { name: 'Lars'},
    {
      name:'john smith',
      rank: 23
    },
    {
      name:'john smith',
      rank: 23
    },
    {
      name:'tim jenkins',
      rank: 1
    },
    {
      name:'Michelle Banks',
      rank: 3
    },
    {
      name:'Mike Jones',
      rank: 5
    },
    {
      name:'Felix Yepez Cervantes',
      rank: 5
    },
    {
      name:'Felix Yepez sba abd asdfad last',
      rank: 5
    },
  ]
  
  lawyers.sort(function (a, b) {
    let lastNameAArray = a.name.split(" ")
    let lastNameBArray = b.name.split(" ")
  
    // console.log(b)
  
    let lastNameA = lastNameAArray[lastNameAArray.length - 1]
  
    let lastNameB = lastNameBArray[lastNameBArray.length - 1]
  
  
    // let lastNameA = a.name.split(" ")[1]
    // let lastNameB = b.name.split(" ")[1]
  
    // console.log("a: " + lastNameA)
    // console.log("b: " + lastNameB)
  
   return lastNameA.toUpperCase() > lastNameB.toUpperCase() ? 1 : -1
  
  
  }
  )
  
  console.log(lawyers)
  
  
  
  
  
  console.log(lawyers);
  
  // Given a list of attorneys, print their names sorted by last name



  const lawyers2 = [
    { name: 'Lars'},
    {
      name:'john smith',
      rank: 23
    },
    {
      name:'john smith',
      rank: 23
    },
    {
      name:'tim jenkins',
      rank: 1
    },
    {
      name:'Michelle Banks',
      rank: 3
    },
    {
      name:'Mike Jones',
      rank: 5
    },
    {
      name:'Felix Yepez Cervantes',
      rank: 5
    },
    {
      name:'Felix Yepez sba abd asdfad last',
      rank: 5
    },
  ]

  const sortedUsers = lawyers2.sort((a, b) => {
    let result = a.name.localeCompare(b.name)

    console.log(result)


  })
