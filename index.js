const collectionCenterData =[
  {
    title: 'Sandstone Pharmacies Henday Centre',
    home: '4804 50 Street, Innisfail, Alberta T4G 1C2',
    phone: '403 227-1111',
    email: 'hendayrx@sandstonerx.ca',
    button: function(){
      console.log('click')
    }
  },
  {
    title: 'Sandstone Pharmacies Crescent Heights',
    home: '25 8 Street NW, Medicine Hat, Alberta T1A 6N9',
    phone: '403 526-5959',
    email: 'crescentheightsrx@sandstonerx.ca',
    button: function(){
      console.log( ' click ')
    }
  },
  {
    title: 'Medicine Shoppe Pharmacy #398 in Killarney',
    home: '70-1935 37th Street Southwest, Calgary, AB, Canada',
    phone: '403-452-8333',
    email: 'ms0398@store.medicineshoppe.ca',
    button: function(){
      console.log( ' click ')
    }
  },
  {
    title: 'Sandstone Pharmacies Nanton',
    home: 'Box 302 Nanton, Alberta T0L 1R0, (2212-20th Street)',
    phone: '403 646-2166',
    email: 'nantonrx@sandstonerx.ca',
    button: function(){
      console.log( ' click ')
    }
  }
]


const about = document.querySelector('.about p')
const aboutUl = document.querySelector('nav .about ul')

const rc = document.querySelector('nav .research-clinic p')
const rcUl = document.querySelector('nav .research-clinic ul')

const ps = document.querySelector('nav .products-services p')
const psUl = document.querySelector('nav .products-services ul')

const humburger = document.querySelector(' nav .humburger')
const navBar = document.querySelector('nav .nav-bar')

const collectionContainer = document.querySelector('.collection .collection-container')

const personDropDown = document.querySelector('.person .person-dropdown')
const personBtn = document.querySelector('.appointment-form #person')

const adultCountPlaceHolder = document.querySelector('.person .adults span')
const childrenCountPlaceHolder = document.querySelector('.person .children span')
const totalPersonCountPlaceHolder = document.querySelector('.person #person span')

// setting default value for date picker
document.querySelector('.appointment-form #appointment-date').valueAsDate = new Date()

let appointmentSelected = null

const buttonsHandle = ()=> {
  
  resetTabs( event.target.parentElement.children  )

  event.target.children[0].classList.add('fa-check-circle')
  event.target.classList.add('tab-selected')

  appointmentSelected = event.target.id
}

about.addEventListener('click',()=>{
  aboutUl.classList.toggle('mobile-show')
})

about.addEventListener('mouseover',()=>{
  aboutUl.classList.add('show')
})

about.addEventListener('mouseleave',()=>{
  aboutUl.classList.remove('show')
})

aboutUl.addEventListener('mouseover',()=>{
  aboutUl.classList.add('show')
})

aboutUl.addEventListener('mouseleave',()=>{
  aboutUl.classList.remove('show')
})


rc.addEventListener('click',()=>{
  rcUl.classList.toggle('mobile-show')
})

rc.addEventListener('mouseover',()=>{
  rcUl.classList.add('show')
})

rc.addEventListener('mouseleave',()=>{
  rcUl.classList.remove('show')
})

rcUl.addEventListener('mouseover',()=>{
  rcUl.classList.add('show')
})

rcUl.addEventListener('mouseleave',()=>{
  rcUl.classList.remove('show')
})

ps.addEventListener('click',()=>{
  psUl.classList.toggle('mobile-show')
})

ps.addEventListener('mouseover',()=>{
  psUl.classList.add('show')
})

ps.addEventListener('mouseleave',()=>{
  psUl.classList.remove('show')
})

psUl.addEventListener('mouseover',()=>{
  psUl.classList.add('show')
})

psUl.addEventListener('mouseleave',()=>{
  psUl.classList.remove('show')
})

personBtn.addEventListener('click',()=>{
  personDropDown.classList.toggle('open')
})

// animate
humburger.addEventListener('click',()=>{
  navBar.classList.toggle('show')
  humburger.classList.toggle('open')
})

// collection data
collectionCenterData.forEach( item =>{
  const newDiv = document.createElement('div')

  newDiv.className='item'
  newDiv.innerHTML= `<h5> ${item.title} </h5>
                     <p> <i class="fas fa-home"></i> ${item.home}</p> 
                     <p> <i class="fas fa-phone"></i> ${item.phone}</p> 
                     <a href="mailto:${item.email}"> <i class="fas fa-envelope"></i> ${item.email}</a>
                     <div><button>Book Now</button></div>
                    `
  collectionContainer.appendChild( newDiv )
})


// reset
const resetTabs =(tabChildren)=>{
  for( let i=0; i < tabChildren.length; i++){
    tabChildren[i].classList.remove('tab-selected')
    tabChildren[i].children[0].classList.remove('fa-check-circle')
  }
}

const addAdult =()=>{
  const currentValue = parseInt(adultCountPlaceHolder.textContent)
  adultCountPlaceHolder.textContent = currentValue + 1
  totalPersonCount()
}

const subAdult =()=>{
  const currentValue = parseInt(adultCountPlaceHolder.textContent)
  if( currentValue <= 0 ){
    adultCountPlaceHolder.textContent = 0  
  }else{
    adultCountPlaceHolder.textContent = currentValue - 1
  }
  totalPersonCount()
}

const addChildren =()=> {
  const currentValue = parseInt(childrenCountPlaceHolder.textContent)
  childrenCountPlaceHolder.textContent = currentValue + 1
  totalPersonCount()
}

const subChildren =()=> {
  const currentValue = parseInt(childrenCountPlaceHolder.textContent)
  if( currentValue <= 0 ){
    childrenCountPlaceHolder.textContent = 0  
  }else{
    childrenCountPlaceHolder.textContent = currentValue - 1
  }
  totalPersonCount()
}

const totalPersonCount= ()=>{
  totalPersonCountPlaceHolder.textContent =  parseInt(adultCountPlaceHolder.textContent) + parseInt(childrenCountPlaceHolder.textContent) 
}
