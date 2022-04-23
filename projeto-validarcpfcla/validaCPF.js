class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfsemd = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfsemd);
        const digito2 = this.geraDigito(cpfsemd + digito1);
        this.novoCpf =  cpfsemd + digito1 + digito2;

    }

    geraDigito(cpfSemDigito){
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for(let stringNumerica of cpfSemDigito) {

            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo;

    }
}


const validacpf = new ValidaCPF('070.987.720-03');


console.log(validacpf.valida());