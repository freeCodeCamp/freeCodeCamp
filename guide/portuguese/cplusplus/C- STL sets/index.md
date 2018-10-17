InlocaleTitle: undefined
troduction de conjuntos na biblioteca C ++ STL Conjuntos são um tipo de contêineres associativos nos quais cada elemento deve ser exclusivo. O valor do elemento não pode ser modificado depois que é adicionado ao conjunto, embora seja possível remover e adicionar o valor modificado desse elemento. Eles são implementados usando uma árvore vermelha e preta.

Benefícios de usar conjuntos

1.  Ele armazena apenas valores exclusivos.
2.  O valor do elemento se identifica. O valor de um elemento também é a chave usada para identificá-lo.
3.  Fornece uma pesquisa rápida (O (log n)) usando chaves, ou seja, o próprio elemento.
4.  Existem muitas funções embutidas na classe que definem conjuntos que facilitam a programação.

Exemplo: '' 'c ++

# incluir

usando namespace std; int main () { conjunto s;

s.insert (2); // insere o elemento 2 no conjunto s s.insert (3); s.insert (5); s.insert (2); // inserindo o mesmo elemento 2 s.insert (6); para (auto i: s) cout << i << ""; cout << s.size () << endl; // dá o tamanho do conjunto

s.erase (5); // apagando o elemento 5 do conjunto s return 0; } '' ' Criando um objeto definido '' 'c ++ conjunto s; '' '

Inserção '' 'c ++ s.insert (valor _a ser_ inserido); '' '

Acessando elementos do conjunto '' 'c ++ conjunto :: iterador; para (it = s.begin (); it! = s.end (); ++ it) cout << \* it; '' '