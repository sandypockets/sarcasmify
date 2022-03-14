export function useSarcasm() {
  return function sarcasmify(plainText) {
    let sarcasticText = '';
    const plainTextArray = plainText.toString().toLocaleLowerCase().split('');

    plainTextArray.map((item, index) => {
      if (index % 2 === 0 && item !== ' ') {
        sarcasticText += item.toString().toUpperCase();
      } else {
        sarcasticText += item.toString();
      }
    });
    return sarcasticText;
  };
}
