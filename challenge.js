const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
const anagrams = (strings) => {
    const groups = new Map();
    for (let str of strings) {
      const sortedStr = str.split("").sort().join("");
      if (groups.has(sortedStr)) {
        groups.get(sortedStr).push(str);
      } else {
        groups.set(sortedStr, [str]);
      }
    }
    return Array.from(groups.values());
  };
  
  const groupedAnagrams = anagrams(words);
  
  console.log(groupedAnagrams);