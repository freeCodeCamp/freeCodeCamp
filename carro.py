arro=[]

def calcimp(aliq,custo):
	return aliq*custo/100
for i in range(1):
	placa=input('\nEntre com a Placa do carro: ')
	veicu=input('\nEntre com o nome do Veículo: ')
	marca=input('\nEntre com a marca do Carro: ')
	aliq=float(input('\nEntre com a Aliquota: '))
	
	custo=float(input('\nEntre com o custo: '))
	calc_venda=calcimp(aliq,custo)
	print(calcimp(aliq,custo))
	carro.append([placa, veicu, marca, aliq])
	carro.reverse()
print(carro)
