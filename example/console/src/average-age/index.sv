=-> 'lodash' _

= people |
  : (name 'Alice') (age 24)
  : (name 'Bob') (age 15)
  : (name 'Chris') (age 46)
  : (name 'Daniel') (age 35)
  : (name 'Elisabeth') (age 29)
  : (name 'Fred') (age 52)

= averageAge /
  .reduce (.map people (-> man man.age))
    -> (x y) (+ x y)
    0
  .length people

= manWithClosestToAverageAge _.minBy
  .map people (-> man (: (name man.name) (distance (Math.abs (- averageAge man.age)))))
  'distance'

console.log averageAge
console.log manWithClosestToAverageAge.name
