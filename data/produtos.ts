interface Produto {
    id: string
    imagem: string
    titulo: string
    preco: number
}
export const produtos: Produto[] = [
    { id: '1', imagem: 'https://images.pexels.com/photos/32967534/pexels-photo-32967534.jpeg', titulo: 'VideoGame', preco: 3000.00 },
    { id: '2', imagem: 'https://images.pexels.com/photos/8408981/pexels-photo-8408981.png', titulo: 'Carro', preco: 9000.00 },
    { id: '3', imagem: 'https://images.pexels.com/photos/6664919/pexels-photo-6664919.jpeg', titulo: 'Moto', preco: 1999.99 },
    { id: '4', imagem: 'https://media.istockphoto.com/id/1208589598/pt/foto/table.jpg?b=1&s=612x612&w=0&k=20&c=kqOlVus8Hwb-xww7Hrwr-M7mSKYZaLO5ei6R1zAi1PE=', titulo: 'Mesa', preco: 399.99 },
    { id: '5', imagem: 'https://images.pexels.com/photos/32562036/pexels-photo-32562036.jpeg', titulo: 'Cadeira', preco: 299.99 },

]