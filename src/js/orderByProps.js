export default function orderByProps(data, primaryKeys) {
  const restKeys = Object.keys(data)
    .filter((key) => !primaryKeys.includes(key))
    .sort();

  const keys = primaryKeys.concat(restKeys);

  return keys.map((key) => ({
    key,
    value: data[key],
  }));
}

