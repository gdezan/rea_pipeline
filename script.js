let data = []

const clock1 = {
  'clock-cycle': 1,
  'pc-counter': 4,
  'ifid-npc': 4,
  'ir': 'add $t0, $t1, $t2'
}
data.push(clock1)

const clock2 = {
  'clock-cycle': 2,
  'pc-counter': 8,
  'ifid-npc': 8,
  'ir': 'lw $t4, 4($t5)',
  'alusrc': 0,
  'regdst': 1,
  'aluop': '01',
  'idex-npc': 4,
  'idex-a': 'cont($t1)',
  'idex-b': 'cont($t2)',
  'imm': 'X',
  'rd-i': 'X',
  'rd-r': 'end($t0)'
}
data.push(clock2)

const clock3 = {
  'clock-cycle': 3,
  'pc-counter': 12,
  'ifid-npc': 12,
  'ir': 'or $t3, $t1, $t5',
  'alusrc': 1,
  'regdst': 0,
  'aluop': '00',
  'idex-npc': 8,
  'idex-a': 'cont($t5)',
  'idex-b': 'X',
  'imm': 4,
  'rd-i': 'end($t4)',
  'rd-r': 'X',
  'memread': 0,
  'memwrite': 0,
  'branch': 0,
  'branchtarget': 'X',
  'zero': 'X',
  'exmem-aluout': 'cont($t1) + cont($t0)',
  'exmem-b': 'X',
  'exmem-rd': 'end($t0)'
}
data.push(clock3)

const clock4 = {
  'clock-cycle': 4,
  'pc-counter': 16,
  'ifid-npc': 16,
  'ir': 'sw $t2, 0($sp)',
  'alusrc': 0,
  'regdst': 1,
  'aluop': '01',
  'idex-npc': 12,
  'idex-a': 'cont($t1)',
  'idex-b': 'cont($t5)',
  'imm': 'X',
  'rd-i': 'X',
  'rd-r': 'end($t3)',
  'memread': 1,
  'memwrite': 0,
  'branch': 0,
  'branchtarget': 'X',
  'zero': 'X',
  'exmem-aluout': 'cont($t5) + 4',
  'exmem-b': 'X',
  'exmem-rd': 'end($t4)',
  'regwrite': 1,
  'memtoreg': 0,
  'lmd': 'X',
  'memwb-aluout': 'cont($t1) + cont($t0)',
  'memwb-rd': 'end($t0)'
}
data.push(clock4)

const clock5 = {
  'clock-cycle': 5,
  'pc-counter': 20,
  'ifid-npc': 20,
  'ir': '',
  'alusrc': 1,
  'regdst': 'X',
  'aluop': '00',
  'idex-npc': 16,
  'idex-a': 'cont($sp)',
  'idex-b': 'cont($t2)',
  'imm': 0,
  'rd-i': 'X',
  'rd-r': 'X',
  'memread': 0,
  'memwrite': 0,
  'branch': 0,
  'branchtarget': 'X',
  'zero': 'X',
  'exmem-aluout': 'cont($t1) or cont($t5)',
  'exmem-b': 'X',
  'exmem-rd': 'end($t3)',
  'regwrite': 1,
  'memtoreg': 1,
  'lmd': 'mem(cont($t5) + 4)',
  'memwb-aluout': 'X',
  'memwb-rd': 'end($t4)'
}
data.push(clock5)

const clock6 = {
  'clock-cycle': 6,
  'pc-counter': 24,
  'ifid-npc': '',
  'ir': '',
  'alusrc': '',
  'regdst': '',
  'aluop': '',
  'idex-npc': '',
  'idex-a': '',
  'idex-b': '',
  'imm': '',
  'rd-i': '',
  'rd-r': '',
  'memread': 0,
  'memwrite': 1,
  'branch': 0,
  'branchtarget': 'X',
  'zero': 'X',
  'exmem-aluout': 'cont($sp) + 0',
  'exmem-b': 'cont($t2)',
  'exmem-rd': 'X',
  'regwrite': 1,
  'memtoreg': 0,
  'lmd': 'X',
  'memwb-aluout': 'cont($t1) or cont($t5)',
  'memwb-rd': 'end($t3)'
}
data.push(clock6)

const clock7 = {
  'clock-cycle': 7,
  'pc-counter': 28,
  'ifid-npc': '',
  'ir': '',
  'alusrc': '',
  'regdst': '',
  'aluop': '',
  'idex-npc': '',
  'idex-a': '',
  'idex-b': '',
  'imm': '',
  'rd-i': '',
  'rd-r': '',
  'memread': '',
  'memwrite': '',
  'branch': '',
  'branchtarget': '',
  'zero': '',
  'exmem-aluout': '',
  'exmem-b': '',
  'exmem-rd': '',
  'regwrite': 0,
  'memtoreg': 'X',
  'lmd': 'X',
  'memwb-aluout': 'X',
  'memwb-rd': 'X'
}
data.push(clock7)

const clock8 = {
  'clock-cycle': 8,
  'pc-counter': 32,
  'ifid-npc': '',
  'ir': '',
  'alusrc': '',
  'regdst': '',
  'aluop': '',
  'idex-npc': '',
  'idex-a': '',
  'idex-b': '',
  'imm': '',
  'rd-i': '',
  'rd-r': '',
  'memread': '',
  'memwrite': '',
  'branch': '',
  'branchtarget': '',
  'zero': '',
  'exmem-aluout': '',
  'exmem-b': '',
  'exmem-rd': '',
  'regwrite': '',
  'memtoreg': '',
  'lmd': '',
  'memwb-aluout': '',
  'memwb-rd': ''
}
data.push(clock8)

const incrementClockCounter = () => {
  let clock = parseInt(document.getElementById('clock-cycle').innerHTML)
  Object.keys(data[clock]).forEach(id => {
    document.getElementById(id).innerHTML = data[clock][id]
  })
}

const decrementClockCounter = () => {
  let clock = parseInt(document.getElementById('clock-cycle').innerHTML)
  if (clock > 1) {
    clock = clock - 2
    Object.keys(data[clock]).forEach(id => {
      document.getElementById(id).innerHTML = data[clock][id]
    })
  } else {
    restartClock()
  }
}

const restartClock = () => {
  const clock0 = {
    'clock-cycle': 0,
    'pc-counter': 0,
    'ifid-npc': '',
    'ir': '',
    'alusrc': '',
    'regdst': '',
    'aluop': '',
    'idex-npc': '',
    'idex-a': '',
    'idex-b': '',
    'imm': '',
    'rd-i': '',
    'rd-r': '',
    'memread': '',
    'memwrite': '',
    'branch': '',
    'branchtarget': '',
    'zero': '',
    'exmem-aluout': '',
    'exmem-b': '',
    'exmem-rd': '',
    'regwrite': '',
    'memtoreg': '',
    'lmd': '',
    'memwb-aluout': '',
    'memwb-rd': ''
  }
  Object.keys(clock0).forEach(id => {
    document.getElementById(id).innerHTML = clock0[id]
  })
}