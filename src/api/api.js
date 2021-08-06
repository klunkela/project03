import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const userAPI = {
    getLogin(id) {


        return instance.get('users/' + id).catch(err => {
            // what now?
            //console.log(err);
        })

    }
}
export const api = {
    getName() {
        return instance.get('heroName')
    },
    setName(name) {
        return instance.put('heroName', {name})
    }
}


export const heroesAPI = {
    getHeroes() {
        return instance.get('heroes')
    },
    setName(name) {
        return instance.put('heroName', {name})
    }
}

let basicHeroes = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "strength": 0,
        "agility": 0,
        "intelligence": 0,
        "charisma": 0
    },
    {
        "id": 2,
        "name": "user22",
        "strength": 0,
        "agility": 0,
        "intelligence": 0,
        "charisma": 0
    }
]
export const loginAPI = {
    check(login, password, setIsAuth, setId) {
        instance.get('users').then(response => {
                let pos = response.data.map(e => e.login).indexOf(login)
                let res = response.data.map(e => e.password)[pos] === password
                let id = response.data.map(e => e.id)[pos]
                if (res) {
                    setId(id)
                    setIsAuth(response.data.map(e => e.password)[pos] === password)
                } else {

                }
            }
        )
    },
    reg(login, password, email, setIsAuth, setId, setIsJustRegistered) {
        let id = randomInteger(3, 100000000);
        instance.post('users', {id, login, password, email, heroes: basicHeroes})
        setId(id)
        setIsJustRegistered(true)
        setIsAuth(true)
    },
    getLogins(setLogins) {
        instance.get('users').then(response => {
            let pos = response.data.map(e => e.login)
            setLogins(pos)
        })
    }
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function getLastId(s) {
    console.log(instance.get('users'), 1);
    return instance.get('users').then(response => {
        console.log(response.data[response.data.length - 1].id, 2)
        s(response.data[response.data.length - 1].id)
    })
}