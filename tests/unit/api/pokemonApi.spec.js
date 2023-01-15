import pokemonApi from "@/api/pokemonApi"

describe('pokemonApi', () => {
    test('axios debe estar configurado con el url de pokemon apo', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})