import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

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


export const loginAPI = {
    check(login, password, setIsAuth) {
        return instance.get('users').then(response => {
                let pos = response.data.map(e => e.login).indexOf(login)
                setIsAuth(response.data.map(e => e.password)[pos] === password)
            }
        )
    }
}

