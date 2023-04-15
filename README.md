# Challenge ONE - text-decoder (v.0.0.1)

<div align="center">

![cms_files_10224_1671211139Prancheta_3](https://user-images.githubusercontent.com/3737837/232214037-c0ded352-9ba0-4dd3-9842-f94663568804.png)

</div>

## Sobre o projeto

O text-decoder é uma aplicação que criptografa textos feita para a prática de lógica de programação.

Abaxo são descritas as "chaves" utilizadas no projeto:

```html
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
```

## Requisitos:

- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:

```TXT
"gato" => "gaitober"
gaitober" => "gato"
```

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.

## Extras:

- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

## Conteudo

A aplicacão está disponível em três idiomas e para otimizar a manutenão e inclusão de outros idiomas os textos da interface são disponibilizados via json. No futuro será implementada uma api de idiomas para a interface.
