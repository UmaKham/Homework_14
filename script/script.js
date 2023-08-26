let mass = [245, 11, 88, 2, 90, 1, 50, 148, 200, 8, 10]

function bubblesort() {
  for(let i = 0; i < mass.length; i++) {
    for(let k = 0; k < mass.length; k++) {
      if( mass[k] > mass[k +1]) {
        let storage = mass[k];
        mass[k] = mass[k +1];
        mass[k +1] = storage;
      }
    }
  }
  console.log(mass);
}

bubblesort();