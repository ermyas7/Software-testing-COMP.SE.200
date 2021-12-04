//test data
const usersWithActive = [
    { 'user': 'barney', active: true },
    { 'user': 'fred',   active: false },
  ]

const usersWithMultipleInactive = [
{ 'user': 'barney', 'active': true },
{ 'user': 'fred',   'active': false },
{ 'user': 'Mike',   'active': false },
]     

const usersWithMultipleActive = [
{ 'user': 'barney', 'active': true },
{ 'user': 'Jone', 'active': true },
{ 'user': 'fred',   'active': false }
]

const usersWithNoActive = [
 { 'user': 'Jone', 'active': false },
 { 'user': 'fred',   'active': false }
]

const usersWithNoinActive = [
 { 'user': 'Jone', 'active': true },
 { 'user': 'fred',   'active': true }
]

const usersWithEmptyElement = [];

module.exports = {
    usersWithActive,
    usersWithMultipleInactive,
    usersWithMultipleActive,
    usersWithNoActive,
    usersWithNoinActive,
    usersWithEmptyElement
};