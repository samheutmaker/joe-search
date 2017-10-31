import rei from './rei'

export default function Search(searchQuery, config) {
  return new Promise((resolve, reject) => {
    let queries = [
      
      rei.search(searchQuery),
      
    ];
    Promise.all(queries)
      .then((res) => {
        console.log(res);
        resolve(mergeArrays(res));
      })
      .catch(err => console.error(err));
  });
}


function mergeArrays(arrays) {
  let results = [];
  let maxLength = Math.max(...arrays.map(a => a.length));
  for (let i = 0; i < maxLength; i++) {
    arrays.forEach((array) => {
      if (array[i]) {
        results.push(array[i])
      };
    })
  }
  return results;
}