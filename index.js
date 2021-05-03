class DropdownList {


  constructor(tagName, data) {

    this.$el = document.querySelector(tagName)
    this.$input = this.$el.querySelector('.dropdown-input')
    this.$list = this.$el.querySelector('.dropdown-list')
    this.items = data.items
    this.init()

    this.$input.addEventListener('click', event => {
      if(this.$el.className === 'open') {
        this.close()
      } else {
        this.open()
      }
    })

    document.addEventListener('click', event => {

      

      if(event.target.nodeName.toLowerCase() == 'li') {
        
        const current = event.target.dataset.code
        const res = this.items.find(el => el.code === current)
        this.$input.textContent = res.name
        this.close()

      }
    })

  }

  init() {
    this.$input.textContent = this.items[0].name;
    const list = this.items.map(item => {
      return `<li data-code='${item.code}'>${item.name}</li>`
    }).join('')
    this.$list.insertAdjacentHTML('afterBegin', list)
  }

  open() {
    this.$el.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
  }

}



dropDownList = new DropdownList('#dropdown', {
  items: [
    {code: 'surgut', name: 'Сургут'},
    {code: 'moscow', name: 'Москва'},
    {code: 'spb', name: 'Санкт-Питербург'},
    {code: 'orel', name: 'Орел'},
    {code: 'anapa', name: 'Анапа'},
    {code: 'krasnodar', name: 'Краснодар'},
    {code: 'sochi', name: 'Сочи'}
  ]
})

console.log(dropDownList)