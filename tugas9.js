function mobilephone() {
    let phone = {
        merk: 'Apple',
        harga: 8000000,
        warna: 'silver',
        type: ['ip8plus', 'ip7plus', 'ip11', 'ip12pro']
    }
    for (const x in phone) {
        console.log(phone[x])

    }
}

mobilephone()