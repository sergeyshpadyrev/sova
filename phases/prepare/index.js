const _ = require("lodash");

const countSpaces = lines =>
  lines.map(line => ({
    value: line.trim(),
    spaces: line.search(/\S/)
  }));

const clean = lines => lines.filter(line => line.spaces >= 0);

const makeTree = (lines, spaces = 0) => {
  if (lines.length === 0) return [];

  const isChild = line => line.spaces > spaces;
  const children = _.takeWhile(_.tail(lines), isChild);

  const tree = {
    value: _.head(lines).value,
    children: makeTree(children, spaces + 2)
  };

  const tail = _.drop(lines, children.length + 1);
  return [tree].concat(makeTree(tail, spaces));
};

module.exports = lines => {
  const counted = countSpaces(lines);
  const cleaned = clean(counted);
  const tree = makeTree(cleaned);

  return tree;
};

