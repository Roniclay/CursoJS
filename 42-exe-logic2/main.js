const ePaisagem = (altura, largura) => {
    return altura > largura ? 'Modo normal' : 'Modo paisagem';
};


console.log(ePaisagem(1000, 600));