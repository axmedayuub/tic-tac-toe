const all = document.querySelectorAll('.spot')
var check = true
var completed = false
var turn = false
var mark = 'X'
var clickcount = 0;
var noti = document.getElementById('notification')

//resset function
function resset() {
  var count = 1
  all.forEach((ele) => {
    ele.classList.remove('clred')
    ele.classList.remove('clblue')
    ele.classList.remove('font')
    ele.innerHTML = 'pos' + count
    count++
  })
  check = true
  completed = false
  turn = false
  mark = 'X'
  noti.removeAttribute('class')
  noti.classList.add('noti')
}

all.forEach(function (even) {
  even.addEventListener('click', function (e) {
    if (
      e.currentTarget.innerHTML !== 'X' &&
      e.currentTarget.innerHTML !== 'O'
    ) {
      if (!completed) {
        if (check) {
          even.innerText = mark
          even.classList.add('clred', 'font')
          check = false
          checking()
          if (!completed) {
            mark = 'O'
          } else {
            noti.classList.add('xwiner')
            noti.classList.remove('owiner')
            noti.classList.remove('warning')
            noti.innerText = 'The winner is: ' + mark
          }
        } else {
          even.innerText = mark
          even.classList.add('clblue', 'font')
          check = true
          checking()
          if (!completed) {
            mark = 'X'
          } else {
            noti.classList.add('owiner')
            noti.classList.add('notification')
            noti.classList.remove('xwiner')
            noti.classList.remove('warning')
            noti.innerText = 'The winner is: ' + mark
          }
        }
        clickcount++;
        //check if there is draw
      } else {
        noti.classList.remove('xwiner')
        noti.classList.add('notification')
        noti.classList.remove('xwiner')
        noti.classList.remove('warning')
        noti.classList.add('info')
        noti.innerText = 'Restrart The Game'
      }
    } else {
      noti.classList.remove('xwiner')
      noti.classList.remove('xwiner')
      noti.classList.add('warning')
      noti.innerText = 'select another position'
    }
  })
})

//checking winner function
function checking() {
  if (
    all[0].innerHTML == all[3].innerHTML &&
    all[3].innerHTML == all[6].innerHTML
  ) {
    completed = true
  } else if (
    all[0].innerHTML == all[1].innerHTML &&
    all[1].innerHTML == all[2].innerHTML
  ) {
    completed = true
  } else if (
    all[3].innerHTML == all[4].innerHTML &&
    all[4].innerHTML == all[5].innerHTML
  ) {
    completed = true
  } else if (
    all[6].innerHTML == all[7].innerHTML &&
    all[7].innerHTML == all[8].innerHTML
  ) {
    completed = true
  } else if (
    all[1].innerHTML == all[4].innerHTML &&
    all[4].innerHTML == all[7].innerHTML
  ) {
    completed = true
  } else if (
    all[2].innerHTML == all[5].innerHTML &&
    all[5].innerHTML == all[8].innerHTML
  ) {
    completed = true
  } else if (
    all[2].innerHTML == all[4].innerHTML &&
    all[4].innerHTML == all[6].innerHTML
  ) {
    completed = true
  } else if (
    all[0].innerHTML == all[4].innerHTML &&
    all[4].innerHTML == all[8].innerHTML
  ) {
    completed = true
  }
}
