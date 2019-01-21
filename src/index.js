// import '@babel/polyfill'

let tabs = ['hello']

tabs = [...tabs, 'world']

console.log(tabs)

// document.getElementsByClassName('lead')[0].innerHTML = tabs.join(' ')

document.querySelector('.lead').innerHTML = tabs.join(' ')
