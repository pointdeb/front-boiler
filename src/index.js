// import '@babel/polyfill'

let tabs = ['hello']

tabs = [...tabs, 'world']

console.log(tabs)

document.querySelector('.lead').innerHTML = tabs.join(' ')
