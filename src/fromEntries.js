const fromEntries = entries => {
    const obj = {};
    entries.forEach(entry => {
      obj[entry[0]] = entry[1];
    });
    return obj;
  };
  
  export default fromEntries;