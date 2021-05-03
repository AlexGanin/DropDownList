class DropdownList {


  constructor(id, data) {

    this.$el = document.createElement('div')
    this.$el.setAttribute('id', id)

    this.$input = document.createElement('div')
    this.$input.classList.add('dropdown-input')

    this.$list = document.createElement('ul')
    this.$list.classList.add('dropdown-list')

    this.items = data.items

    document.querySelector('#app').insertAdjacentElement('afterBegin', this.$el)
    this.$el.insertAdjacentElement('afterBegin', this.$list)
    this.$el.insertAdjacentElement('afterBegin', this.$input)

    this.init()

    this.$el.addEventListener('click', event => {

      if(event.target.nodeName.toLowerCase() == 'li') {

        const current = event.target.dataset.code
        const res = this.items.find(el => el.code === current)
        this.$input.textContent = res.name
        this.close()

      } else if(event.target.classList.contains('dropdown-input')) {

        if(this.$el.className === 'open') {
            this.close()
          } else {
            this.open()
          }

      }

    })
  }

  init() {

    this.$input.textContent = this.items[0].name
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

dropDownList = new DropdownList('dropdown', {
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