import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Define o número de colunas
num_rows = 10000

# Define a data base
base_date = datetime(1900, 1, 1)

# Geração de Datas (últimos 4 anos (considerando anos bissextos)
end_date = datetime.now()
years = 4
start_date = end_date - timedelta(days=(365 * years + ((years // 4) * 1)))
dates = [start_date + timedelta(days=np.random.randint(0, (365 * years + ((years // 4) * 1)))) for _ in range(num_rows)] 

dates_in_days = [(d - base_date).days for d in dates]
#print(dates_in_days)
# Vendedor
vendedores = ['Barista', 'Auxiliar de Cozinha']
selected_vendedores = np.random.choice(vendedores, num_rows)

# Cliente
clientes = [f'Cliente {i+1}' for i in range(num_rows)]

# Região (some Brazilian cities/regions, including Santa Maria)
regioes = ['Santa Maria', 'Porto Alegre', 'Curitiba', 'São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Belo Horizonte', 'Brasília']
selected_regioes = np.random.choice(regioes, num_rows)

# Produto (coffee shop items)
produtos = [
    'Café Expresso', 'Cappuccino', 'Latte', 'Mocha', 'Chá Gelado',
    'Pão de Queijo', 'Bolo de Cenoura', 'Torta de Limão', 'Croissant', 'Sanduíche Natural',
    'Suco de Laranja', 'Água Mineral', 'Refrigerante', 'Salgado Assado', 'Doce Variado'
]
selected_produtos = np.random.choice(produtos, num_rows)

# Valor (realistic values for coffee shop items in BRL)
valores = np.round(np.random.uniform(5.00, 45.00, num_rows), 2)

# Equipamento (flat list respecting quantities)
equipamentos = [
    'Máquina de Expresso', 'Moedor', 'Mixer',
    'Jarra de Vaporização', 'Jarra de Vaporização', # 2 Jarras
    'Forno Elétrico',
    'Micro ondas', 'Micro ondas', # 2 Micro ondas
    'Freezer Horizontal',
    'Balança Digital',
    'Pia inox',
    'Vitrine',
    'Utensílios Diversos'
]
selected_equipamentos = np.random.choice(equipamentos, num_rows)

# Forma de Pagamento
formas_pagamento = ['Crédito', 'Débito', 'Dinheiro', 'Pix', 'Cartão Refeição']
selected_formas_pagamento = np.random.choice(formas_pagamento, num_rows)

# Create DataFrame
df = pd.DataFrame({
    'Data': dates,
    'Data em Dias': dates_in_days,
    'Vendedor': selected_vendedores,
    'Cliente': clientes,
    'Região': selected_regioes,
    'Produto': selected_produtos,
    'Valor': valores,
    'Equipamento': selected_equipamentos,
    'Forma de Pagamento': selected_formas_pagamento
})

# Display the DataFrame
print(df.to_markdown(index=False))