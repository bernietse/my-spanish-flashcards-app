const flashcards = [
  {
    "spanish": "Hola",
    "english": "Hello"
  },
  {
    "spanish": "Adiós",
    "english": "Goodbye"
  },
  {
    "spanish": "Por favor",
    "english": "Please"
  },
  {
    "spanish": "Gracias",
    "english": "Thank you"
  },
  {
    "spanish": "De nada",
    "english": "You're welcome"
  },
  {
    "spanish": "Sí",
    "english": "Yes"
  },
  {
    "spanish": "No",
    "english": "No"
  },
  {
    "spanish": "Permiso",
    "english": "Excuse me (to pass by)"
  },
  {
    "spanish": "Lo siento",
    "english": "I'm sorry"
  },
  {
    "spanish": "¿Cómo estás?",
    "english": "How are you? (informal)"
  },
  {
    "spanish": "¿Cómo está usted?",
    "english": "How are you? (formal)"
  },
  {
    "spanish": "Estoy bien",
    "english": "I'm fine"
  },
  {
    "spanish": "¿Y tú?",
    "english": "And you? (informal)"
  },
  {
    "spanish": "¿Y usted?",
    "english": "And you? (formal)"
  },
  {
    "spanish": "Mucho gusto",
    "english": "Nice to meet you"
  },
  {
    "spanish": "Encantado/a",
    "english": "Pleased to meet you (masculine/feminine)"
  },
  {
    "spanish": "Buenos días",
    "english": "Good morning"
  },
  {
    "spanish": "Buenas tardes",
    "english": "Good afternoon/evening"
  },
  {
    "spanish": "Buenas noches",
    "english": "Good night"
  },
  {
    "spanish": "Hasta luego",
    "english": "See you later"
  },
  {
    "spanish": "Hasta mañana",
    "english": "See you tomorrow"
  },
  {
    "spanish": "¿Qué tal?",
    "english": "What's up?/How's it going?"
  },
  {
    "spanish": "¿Cómo te llamas?",
    "english": "What's your name? (informal)"
  },
  {
    "spanish": "¿Cómo se llama usted?",
    "english": "What's your name? (formal)"
  },
  {
    "spanish": "Me llamo...",
    "english": "My name is..."
  },
  {
    "spanish": "Soy de...",
    "english": "I am from..."
  },
  {
    "spanish": "¿De dónde eres?",
    "english": "Where are you from? (informal)"
  },
  {
    "spanish": "¿De dónde es usted?",
    "english": "Where are you from? (formal)"
  },
  {
    "spanish": "¿Hablas inglés?",
    "english": "Do you speak English? (informal)"
  },
  {
    "spanish": "¿Habla usted inglés?",
    "english": "Do you speak English? (formal)"
  },
  {
    "spanish": "No hablo español",
    "english": "I don't speak Spanish"
  },
  {
    "spanish": "Hablo un poco de español",
    "english": "I speak a little Spanish"
  },
  {
    "spanish": "¿Puedes repetir?",
    "english": "Can you repeat? (informal)"
  },
  {
    "spanish": "¿Puede repetir?",
    "english": "Can you repeat? (formal)"
  },
  {
    "spanish": "Más despacio",
    "english": "More slowly"
  },
  {
    "spanish": "Entiendo",
    "english": "I understand"
  },
  {
    "spanish": "No entiendo",
    "english": "I don't understand"
  },
  {
    "spanish": "¿Qué significa...?",
    "english": "What does... mean?"
  },
  {
    "spanish": "Ayúdame",
    "english": "Help me (informal)"
  },
  {
    "spanish": "Ayúdeme",
    "english": "Help me (formal)"
  },
  {
    "spanish": "Socorro",
    "english": "Help! (emergency)"
  },
  {
    "spanish": "¿Cuánto cuesta?",
    "english": "How much does it cost?"
  },
  {
    "spanish": "¿Dónde está el baño?",
    "english": "Where is the bathroom?"
  },
  {
    "spanish": "Quiero...",
    "english": "I want..."
  },
  {
    "spanish": "No quiero...",
    "english": "I don't want..."
  },
  {
    "spanish": "Necesito...",
    "english": "I need..."
  },
  {
    "spanish": "Tengo una pregunta",
    "english": "I have a question"
  },
  {
    "spanish": "¿Qué hora es?",
    "english": "What time is it?"
  },
  {
    "spanish": "Hoy",
    "english": "Today"
  },
  {
    "spanish": "Mañana",
    "english": "Tomorrow"
  },
  {
    "spanish": "Ayer",
    "english": "Yesterday"
  },
  {
    "spanish": "Ahora",
    "english": "Now"
  },
  {
    "spanish": "Luego",
    "english": "Later"
  },
  {
    "spanish": "Aquí",
    "english": "Here"
  },
  {
    "spanish": "Allí",
    "english": "There"
  },
  {
    "spanish": "Izquierda",
    "english": "Left"
  },
  {
    "spanish": "Derecha",
    "english": "Right"
  },
  {
    "spanish": "Recto",
    "english": "Straight ahead"
  },
  {
    "spanish": "Cerca",
    "english": "Near"
  },
  {
    "spanish": "Lejos",
    "english": "Far"
  },
  {
    "spanish": "Grande",
    "english": "Big"
  },
  {
    "spanish": "Pequeño/a",
    "english": "Small (masculine/feminine)"
  },
  {
    "spanish": "Caliente",
    "english": "Hot"
  },
  {
    "spanish": "Frío/a",
    "english": "Cold (masculine/feminine)"
  },
  {
    "spanish": "Abierto/a",
    "english": "Open (masculine/feminine)"
  },
  {
    "spanish": "Cerrado/a",
    "english": "Closed (masculine/feminine)"
  },
  {
    "spanish": "Hombre",
    "english": "Man"
  },
  {
    "spanish": "Mujer",
    "english": "Woman"
  },
  {
    "spanish": "Niño",
    "english": "Boy/Child"
  },
  {
    "spanish": "Niña",
    "english": "Girl/Child"
  },
  {
    "spanish": "Agua",
    "english": "Water"
  },
  {
    "spanish": "Comida",
    "english": "Food"
  },
  {
    "spanish": "Desayuno",
    "english": "Breakfast"
  },
  {
    "spanish": "Almuerzo",
    "english": "Lunch"
  },
  {
    "spanish": "Cena",
    "english": "Dinner"
  },
  {
    "spanish": "¡Buen provecho!",
    "english": "Enjoy your meal!"
  },
  {
    "spanish": "La cuenta",
    "english": "The bill/check"
  },
  {
    "spanish": "Café",
    "english": "Coffee"
  },
  {
    "spanish": "Té",
    "english": "Tea"
  },
  {
    "spanish": "Zumo",
    "english": "Juice"
  },
  {
    "spanish": "Leche",
    "english": "Milk"
  },
  {
    "spanish": "Pan",
    "english": "Bread"
  },
  {
    "spanish": "Carne",
    "english": "Meat"
  },
  {
    "spanish": "Pescado",
    "english": "Fish"
  },
  {
    "spanish": "Verduras",
    "english": "Vegetables"
  },
  {
    "spanish": "Frutas",
    "english": "Fruits"
  },
  {
    "spanish": "Arroz",
    "english": "Rice"
  },
  {
    "spanish": "Pasta",
    "english": "Pasta"
  },
  {
    "spanish": "Patatas",
    "english": "Potatoes"
  },
  {
    "spanish": "Ensalada",
    "english": "Salad"
  },
  {
    "spanish": "Azúcar",
    "english": "Sugar"
  },
  {
    "spanish": "Sal",
    "english": "Salt"
  },
  {
    "spanish": "Pimienta",
    "english": "Pepper"
  },
  {
    "spanish": "Cuchillo",
    "english": "Knife"
  },
  {
    "spanish": "Tenedor",
    "english": "Fork"
  },
  {
    "spanish": "Cuchara",
    "english": "Spoon"
  },
  {
    "spanish": "Plato",
    "english": "Plate"
  },
  {
    "spanish": "Vaso",
    "english": "Glass"
  },
  {
    "spanish": "Servilleta",
    "english": "Napkin"
  },
  {
    "spanish": "Desayunar",
    "english": "To have breakfast"
  },
  {
    "spanish": "Almorzar",
    "english": "To have lunch"
  },
  {
    "spanish": "Cenar",
    "english": "To have dinner"
  },
  {
    "spanish": "Beber",
    "english": "To drink"
  },
  {
    "spanish": "Comer",
    "english": "To eat"
  },
  {
    "spanish": "Estar",
    "english": "To be (location/state)"
  },
  {
    "spanish": "Ser",
    "english": "To be (identity/characteristic)"
  },
  {
    "spanish": "Tener",
    "english": "To have"
  },
  {
    "spanish": "Ir",
    "english": "To go"
  },
  {
    "spanish": "Venir",
    "english": "To come"
  },
  {
    "spanish": "Hacer",
    "english": "To do/make"
  },
  {
    "spanish": "Decir",
    "english": "To say/tell"
  },
  {
    "spanish": "Poder",
    "english": "To be able to/can"
  },
  {
    "spanish": "Querer",
    "english": "To want/love"
  },
  {
    "spanish": "Saber",
    "english": "To know (facts)"
  },
  {
    "spanish": "Conocer",
    "english": "To know (people/places)"
  },
  {
    "spanish": "Ver",
    "english": "To see"
  },
  {
    "spanish": "Dar",
    "english": "To give"
  },
  {
    "spanish": "Escribir",
    "english": "To write"
  },
  {
    "spanish": "Leer",
    "english": "To read"
  },
  {
    "spanish": "Hablar",
    "english": "To speak"
  },
  {
    "spanish": "Trabajar",
    "english": "To work"
  },
  {
    "spanish": "Vivir",
    "english": "To live"
  },
  {
    "spanish": "Estudiar",
    "english": "To study"
  },
  {
    "spanish": "Escuchar",
    "english": "To listen"
  },
  {
    "spanish": "Mirar",
    "english": "To look at/watch"
  },
  {
    "spanish": "Abrir",
    "english": "To open"
  },
  {
    "spanish": "Cerrar",
    "english": "To close"
  },
  {
    "spanish": "Empezar",
    "english": "To start"
  },
  {
    "spanish": "Terminar",
    "english": "To finish"
  },
  {
    "spanish": "Llegar",
    "english": "To arrive"
  },
  {
    "spanish": "Salir",
    "english": "To leave/go out"
  },
  {
    "spanish": "Coger",
    "english": "To take/grab (Spain)"
  },
  {
    "spanish": "Tomar",
    "english": "To take/drink (Latin America)"
  },
  {
    "spanish": "Viajar",
    "english": "To travel"
  },
  {
    "spanish": "Comprar",
    "english": "To buy"
  },
  {
    "spanish": "Vender",
    "english": "To sell"
  },
  {
    "spanish": "Dinero",
    "english": "Money"
  },
  {
    "spanish": "Banco",
    "english": "Bank"
  },
  {
    "spanish": "Cajero automático",
    "english": "ATM"
  },
  {
    "spanish": "Cambio",
    "english": "Change (money)"
  },
  {
    "spanish": "Moneda",
    "english": "Coin/Currency"
  },
  {
    "spanish": "Billetes",
    "english": "Bills/Notes"
  },
  {
    "spanish": "Tarjeta de crédito",
    "english": "Credit card"
  },
  {
    "spanish": "¿Aceptan tarjetas?",
    "english": "Do you accept cards?"
  },
  {
    "spanish": "Efectivo",
    "english": "Cash"
  },
  {
    "spanish": "Hospital",
    "english": "Hospital"
  },
  {
    "spanish": "Farmacia",
    "english": "Pharmacy"
  },
  {
    "spanish": "Médico",
    "english": "Doctor"
  },
  {
    "spanish": "Enfermo/a",
    "english": "Sick (masculine/feminine)"
  },
  {
    "spanish": "Dolor",
    "english": "Pain"
  },
  {
    "spanish": "Tengo dolor de cabeza",
    "english": "I have a headache"
  },
  {
    "spanish": "Emergencia",
    "english": "Emergency"
  },
  {
    "spanish": "Policía",
    "english": "Police"
  },
  {
    "spanish": "Bomberos",
    "english": "Firefighters"
  },
  {
    "spanish": "Teléfono",
    "english": "Telephone"
  },
  {
    "spanish": "¿Puede llamar a la policía?",
    "english": "Can you call the police?"
  },
  {
    "spanish": "¿Necesito un médico?",
    "english": "I need a doctor"
  },
  {
    "spanish": "Dirección",
    "english": "Address"
  },
  {
    "spanish": "Calle",
    "english": "Street"
  },
  {
    "spanish": "Número",
    "english": "Number"
  },
  {
    "spanish": "Código postal",
    "english": "Postal code"
  },
  {
    "spanish": "Ciudad",
    "english": "City"
  },
  {
    "spanish": "País",
    "english": "Country"
  },
  {
    "spanish": "Mapa",
    "english": "Map"
  },
  {
    "spanish": "Autobús",
    "english": "Bus"
  },
  {
    "spanish": "Tren",
    "english": "Train"
  },
  {
    "spanish": "Metro",
    "english": "Subway/Metro"
  },
  {
    "spanish": "Taxi",
    "english": "Taxi"
  },
  {
    "spanish": "Aeropuerto",
    "english": "Airport"
  },
  {
    "spanish": "Estación",
    "english": "Station"
  },
  {
    "spanish": "Parada",
    "english": "Stop (bus/train)"
  },
  {
    "spanish": "Billete",
    "english": "Ticket"
  },
  {
    "spanish": "Ida y vuelta",
    "english": "Round trip"
  },
  {
    "spanish": "Solo ida",
    "english": "One way"
  },
  {
    "spanish": "¿Cuánto tiempo tarda?",
    "english": "How long does it take?"
  },
  {
    "spanish": "¿A qué hora sale?",
    "english": "What time does it leave?"
  },
  {
    "spanish": "¿A qué hora llega?",
    "english": "What time does it arrive?"
  },
  {
    "spanish": "Hotel",
    "english": "Hotel"
  },
  {
    "spanish": "Habitación",
    "english": "Room"
  },
  {
    "spanish": "Reservación",
    "english": "Reservation"
  },
  {
    "spanish": "¿Tiene una habitación disponible?",
    "english": "Do you have a room available?"
  },
  {
    "spanish": "Clave/Contraseña",
    "english": "Password"
  },
  {
    "spanish": "Wi-Fi",
    "english": "Wi-Fi"
  },
  {
    "spanish": "Internet",
    "english": "Internet"
  },
  {
    "spanish": "Teléfono móvil",
    "english": "Mobile phone"
  },
  {
    "spanish": "Cargador",
    "english": "Charger"
  },
  {
    "spanish": "Enchufe",
    "english": "Plug/Socket"
  },
  {
    "spanish": "¿Hay Wi-Fi aquí?",
    "english": "Is there Wi-Fi here?"
  },
  {
    "spanish": "Clima",
    "english": "Weather"
  },
  {
    "spanish": "Sol",
    "english": "Sun"
  },
  {
    "spanish": "Lluvia",
    "english": "Rain"
  },
  {
    "spanish": "Nieve",
    "english": "Snow"
  },
  {
    "spanish": "Nublado",
    "english": "Cloudy"
  },
  {
    "spanish": "Hace calor",
    "english": "It's hot (weather)"
  },
  {
    "spanish": "Hace frío",
    "english": "It's cold (weather)"
  },
  {
    "spanish": "Hace sol",
    "english": "It's sunny"
  },
  {
    "spanish": "Está lloviendo",
    "english": "It's raining"
  },
  {
    "spanish": "Está nevando",
    "english": "It's snowing"
  },
  {
    "spanish": "Libro",
    "english": "Book"
  },
  {
    "spanish": "Música",
    "english": "Music"
  },
  {
    "spanish": "Película",
    "english": "Movie"
  },
  {
    "spanish": "Tienda",
    "english": "Shop/Store"
  },
  {
    "spanish": "Mercado",
    "english": "Market"
  },
  {
    "spanish": "Centro comercial",
    "english": "Shopping mall"
  },
  {
    "spanish": "Regalo",
    "english": "Gift"
  },
  {
    "spanish": "Recuerdo",
    "english": "Souvenir"
  },
  {
    "spanish": "Precio",
    "english": "Price"
  },
  {
    "spanish": "Descuento",
    "english": "Discount"
  },
  {
    "spanish": "Oferta",
    "english": "Offer/Sale"
  },
  {
    "spanish": "Talla",
    "english": "Size (clothing)"
  },
  {
    "spanish": "Número",
    "english": "Size (shoes)"
  },
  {
    "spanish": "Color",
    "english": "Color"
  },
  {
    "spanish": "Rojo",
    "english": "Red"
  },
  {
    "spanish": "Azul",
    "english": "Blue"
  },
  {
    "spanish": "Verde",
    "english": "Green"
  },
  {
    "spanish": "Amarillo",
    "english": "Yellow"
  },
  {
    "spanish": "Blanco",
    "english": "White"
  },
  {
    "spanish": "Negro",
    "english": "Black"
  },
  {
    "spanish": "Gris",
    "english": "Grey"
  },
  {
    "spanish": "Marrón",
    "english": "Brown"
  },
  {
    "spanish": "Naranja",
    "english": "Orange"
  },
  {
    "spanish": "Rosa",
    "english": "Pink"
  },
  {
    "spanish": "Morado",
    "english": "Purple"
  },
  {
    "spanish": "Claro",
    "english": "Light (color)"
  },
  {
    "spanish": "Oscuro",
    "english": "Dark (color)"
  },
  {
    "spanish": "Guapo/a",
    "english": "Handsome/Beautiful (person)"
  },
  {
    "spanish": "Bonito/a",
    "english": "Pretty/Beautiful (thing)"
  },
  {
    "spanish": "Feo/a",
    "english": "Ugly (masculine/feminine)"
  },
  {
    "spanish": "Nuevo/a",
    "english": "New (masculine/feminine)"
  },
  {
    "spanish": "Viejo/a",
    "english": "Old (masculine/feminine)"
  },
  {
    "spanish": "Limpio/a",
    "english": "Clean (masculine/feminine)"
  },
  {
    "spanish": "Sucio/a",
    "english": "Dirty (masculine/feminine)"
  },
  {
    "spanish": "Feliz",
    "english": "Happy"
  },
  {
    "spanish": "Triste",
    "english": "Sad"
  },
  {
    "spanish": "Enojado/a",
    "english": "Angry (masculine/feminine)"
  },
  {
    "spanish": "Cansado/a",
    "english": "Tired (masculine/feminine)"
  },
  {
    "spanish": "Hambriento/a",
    "english": "Hungry (masculine/feminine)"
  },
  {
    "spanish": "Sediento/a",
    "english": "Thirsty (masculine/feminine)"
  },
  {
    "spanish": "Contento/a",
    "english": "Content/Happy (masculine/feminine)"
  },
  {
    "spanish": "Aburrido/a",
    "english": "Bored (masculine/feminine)"
  },
  {
    "spanish": "Divertido/a",
    "english": "Fun (masculine/feminine)"
  },
  {
    "spanish": "Interesante",
    "english": "Interesting"
  },
  {
    "spanish": "Difícil",
    "english": "Difficult"
  },
  {
    "spanish": "Fácil",
    "english": "Easy"
  },
  {
    "spanish": "Rápido/a",
    "english": "Fast (masculine/feminine)"
  },
  {
    "spanish": "Lento/a",
    "english": "Slow (masculine/feminine)"
  },
  {
    "spanish": "Hermoso/a",
    "english": "Beautiful (masculine/feminine)"
  },
  {
    "spanish": "Mal",
    "english": "Badly/Bad"
  },
  {
    "spanish": "Bien",
    "english": "Well/Good"
  },
  {
    "spanish": "Poco",
    "english": "Little"
  },
  {
    "spanish": "Mucho",
    "english": "Much/A lot"
  },
  {
    "spanish": "Todo",
    "english": "All/Everything"
  },
  {
    "spanish": "Nada",
    "english": "Nothing"
  },
  {
    "spanish": "Alguno/a",
    "english": "Some/Any (masculine/feminine)"
  },
  {
    "spanish": "Ninguno/a",
    "english": "None/No one (masculine/feminine)"
  },
  {
    "spanish": "Siempre",
    "english": "Always"
  },
  {
    "spanish": "Nunca",
    "english": "Never"
  },
  {
    "spanish": "A veces",
    "english": "Sometimes"
  },
  {
    "spanish": "Quizás",
    "english": "Maybe"
  },
  {
    "spanish": "Tal vez",
    "english": "Perhaps"
  },
  {
    "spanish": "Por supuesto",
    "english": "Of course"
  },
  {
    "spanish": "¡Claro que sí!",
    "english": "Of course! (emphatic)"
  },
  {
    "spanish": "No hay problema",
    "english": "No problem"
  },
  {
    "spanish": "¿Me puedes ayudar?",
    "english": "Can you help me? (informal)"
  },
  {
    "spanish": "¿Me puede ayudar?",
    "english": "Can you help me? (formal)"
  },
  {
    "spanish": "¿Qué quieres hacer?",
    "english": "What do you want to do? (informal)"
  },
  {
    "spanish": "¿Qué quiere hacer?",
    "english": "What do you want to do? (formal)"
  },
  {
    "spanish": "Estoy aprendiendo español",
    "english": "I'm learning Spanish"
  },
  {
    "spanish": "Me gusta",
    "english": "I like it"
  },
  {
    "spanish": "No me gusta",
    "english": "I don't like it"
  },
  {
    "spanish": "¡Qué bien!",
    "english": "How good!/Great!"
  },
  {
    "spanish": "¡Qué mal!",
    "english": "How bad!"
  },
  {
    "spanish": "¡Qué bonito!",
    "english": "How beautiful!"
  },
  {
    "spanish": "¡Qué lástima!",
    "english": "What a shame!"
  },
  {
    "spanish": "¡Cuidado!",
    "english": "Careful!/Watch out!"
  },
  {
    "spanish": "¡Atención!",
    "english": "Attention!"
  },
  {
    "spanish": "¡Qué tenga un buen día!",
    "english": "Have a good day! (formal)"
  },
  {
    "spanish": "¡Qué tengas un buen día!",
    "english": "Have a good day! (informal)"
  },
  {
    "spanish": "¡Feliz cumpleaños!",
    "english": "Happy birthday!"
  },
  {
    "spanish": "¡Feliz Navidad!",
    "english": "Merry Christmas!"
  },
  {
    "spanish": "¡Feliz Año Nuevo!",
    "english": "Happy New Year!"
  },
  {
    "spanish": "¡Buena suerte!",
    "english": "Good luck!"
  },
  {
    "spanish": "¡Salud!",
    "english": "Cheers!/Bless you! (after sneeze)"
  },
  {
    "spanish": "Lo siento mucho",
    "english": "I'm very sorry"
  },
  {
    "spanish": "No te preocupes",
    "english": "Don't worry (informal)"
  },
  {
    "spanish": "No se preocupe",
    "english": "Don't worry (formal)"
  },
  {
    "spanish": "No pasa nada",
    "english": "It's nothing/No worries"
  },
  {
    "spanish": "¿De verdad?",
    "english": "Really?"
  },
  {
    "spanish": "Es verdad",
    "english": "It's true"
  },
  {
    "spanish": "Mentira",
    "english": "Lie"
  },
  {
    "spanish": "¡Increíble!",
    "english": "Incredible!"
  },
  {
    "spanish": "¿Listo/a?",
    "english": "Ready? (masculine/feminine)"
  },
  {
    "spanish": "Estoy listo/a",
    "english": "I'm ready (masculine/feminine)"
  },
  {
    "spanish": "Vamos",
    "english": "Let's go"
  },
  {
    "spanish": "Venga",
    "english": "Come on/Let's go (Spain)"
  },
  {
    "spanish": "¡Adelante!",
    "english": "Go ahead!/Come in!"
  },
  {
    "spanish": "Espera un momento",
    "english": "Wait a moment (informal)"
  },
  {
    "spanish": "Espere un momento",
    "english": "Wait a moment (formal)"
  },
  {
    "spanish": "Un momento",
    "english": "One moment"
  },
  {
    "spanish": "Ahora mismo",
    "english": "Right now/Immediately"
  },
  {
    "spanish": "Más tarde",
    "english": "Later"
  },
  {
    "spanish": "Más temprano",
    "english": "Earlier"
  },
  {
    "spanish": "Pronto",
    "english": "Soon"
  },
  {
    "spanish": "Tarde",
    "english": "Late"
  },
  {
    "spanish": "Temprano",
    "english": "Early"
  },
  {
    "spanish": "A tiempo",
    "english": "On time"
  },
  {
    "spanish": "La hora",
    "english": "The hour/time"
  },
  {
    "spanish": "El día",
    "english": "The day"
  },
  {
    "spanish": "La semana",
    "english": "The week"
  },
  {
    "spanish": "El mes",
    "english": "The month"
  },
  {
    "spanish": "El año",
    "english": "The year"
  },
  {
    "spanish": "Lunes",
    "english": "Monday"
  },
  {
    "spanish": "Martes",
    "english": "Tuesday"
  },
  {
    "spanish": "Miércoles",
    "english": "Wednesday"
  },
  {
    "spanish": "Jueves",
    "english": "Thursday"
  },
  {
    "spanish": "Viernes",
    "english": "Friday"
  },
  {
    "spanish": "Sábado",
    "english": "Saturday"
  },
  {
    "spanish": "Domingo",
    "english": "Sunday"
  },
  {
    "spanish": "Enero",
    "english": "January"
  },
  {
    "spanish": "Febrero",
    "english": "February"
  },
  {
    "spanish": "Marzo",
    "english": "March"
  },
  {
    "spanish": "Abril",
    "english": "April"
  },
  {
    "spanish": "Mayo",
    "english": "May"
  },
  {
    "spanish": "Junio",
    "english": "June"
  },
  {
    "spanish": "Julio",
    "english": "July"
  },
  {
    "spanish": "Agosto",
    "english": "August"
  },
  {
    "spanish": "Septiembre",
    "english": "September"
  },
  {
    "spanish": "Octubre",
    "english": "October"
  },
  {
    "spanish": "Noviembre",
    "english": "November"
  },
  {
    "spanish": "Diciembre",
    "english": "December"
  },
  {
    "spanish": "Primavera",
    "english": "Spring"
  },
  {
    "spanish": "Verano",
    "english": "Summer"
  },
  {
    "spanish": "Otoño",
    "english": "Autumn/Fall"
  },
  {
    "spanish": "Invierno",
    "english": "Winter"
  },
  {
    "spanish": "Estación",
    "english": "Season/Station"
  },
  {
    "spanish": "¿Me puede traer...?",
    "english": "Can you bring me...? (formal)"
  },
  {
    "spanish": "¿Me puedes traer...?",
    "english": "Can you bring me...? (informal)"
  },
  {
    "spanish": "¿Me puede dar...?",
    "english": "Can you give me...? (formal)"
  },
  {
    "spanish": "¿Me puedes dar...?",
    "english": "Can you give me...? (informal)"
  },
  {
    "spanish": "¿Me puede indicar...?",
    "english": "Can you show me...? (formal)"
  },
  {
    "spanish": "¿Me puedes indicar...?",
    "english": "Can you show me...? (informal)"
  },
  {
    "spanish": "El menú",
    "english": "The menu"
  },
  {
    "spanish": "¿Qué recomiendas?",
    "english": "What do you recommend? (informal)"
  },
  {
    "spanish": "¿Qué recomienda?",
    "english": "What do you recommend? (formal)"
  },
  {
    "spanish": "Soy vegetariano/a",
    "english": "I am vegetarian (masculine/feminine)"
  },
  {
    "spanish": "Soy alérgico/a a...",
    "english": "I am allergic to... (masculine/feminine)"
  },
  {
    "spanish": "Sin gluten",
    "english": "Gluten-free"
  },
  {
    "spanish": "Picante",
    "english": "Spicy"
  },
  {
    "spanish": "Dulce",
    "english": "Sweet"
  },
  {
    "spanish": "Amargo/a",
    "english": "Bitter (masculine/feminine)"
  },
  {
    "spanish": "Salado/a",
    "english": "Salty (masculine/feminine)"
  },
  {
    "spanish": "Tengo frío",
    "english": "I am cold"
  },
  {
    "spanish": "Tengo calor",
    "english": "I am hot"
  },
  {
    "spanish": "Tengo sueño",
    "english": "I am sleepy"
  },
  {
    "spanish": "Tengo prisa",
    "english": "I am in a hurry"
  },
  {
    "spanish": "Tengo miedo",
    "english": "I am afraid"
  },
  {
    "spanish": "Tengo hambre",
    "english": "I am hungry"
  },
  {
    "spanish": "Tengo sed",
    "english": "I am thirsty"
  },
  {
    "spanish": "Tengo razón",
    "english": "I am right"
  },
  {
    "spanish": "No tengo razón",
    "english": "I am wrong"
  },
  {
    "spanish": "¿Cómo se dice...?",
    "english": "How do you say...?"
  },
  {
    "spanish": "¿Qué tal el día?",
    "english": "How was your day?"
  },
  {
    "spanish": "¿Dónde está esto?",
    "english": "Where is this?"
  },
  {
    "spanish": "¿Cuánto tiempo?",
    "english": "How much time?"
  },
  {
    "spanish": "¿Cuántos?",
    "english": "How many? (masculine)"
  },
  {
    "spanish": "¿Cuántas?",
    "english": "How many? (feminine)"
  },
  {
    "spanish": "¿Cuál?",
    "english": "Which (singular)"
  },
  {
    "spanish": "¿Cuáles?",
    "english": "Which (plural)"
  },
  {
    "spanish": "¿Quién?",
    "english": "Who (singular)"
  },
  {
    "spanish": "¿Quiénes?",
    "english": "Who (plural)"
  },
  {
    "spanish": "¿Por qué?",
    "english": "Why?"
  },
  {
    "spanish": "Porque",
    "english": "Because"
  },
  {
    "spanish": "¿Cuándo?",
    "english": "When?"
  },
  {
    "spanish": "¿Dónde?",
    "english": "Where?"
  },
  {
    "spanish": "¿Cómo?",
    "english": "How?"
  },
  {
    "spanish": "¿Qué?",
    "english": "What?"
  },
  {
    "spanish": "¿Para qué?",
    "english": "What for?"
  },
  {
    "spanish": "¿Con quién?",
    "english": "With whom?"
  },
  {
    "spanish": "¿Desde cuándo?",
    "english": "Since when?"
  },
  {
    "spanish": "¿Hasta cuándo?",
    "english": "Until when?"
  },
  {
    "spanish": "¿A qué hora?",
    "english": "At what time?"
  },
  {
    "spanish": "¿Cuánto?",
    "english": "How much? (singular masculine)"
  },
  {
    "spanish": "¿Cuánta?",
    "english": "How much? (singular feminine)"
  },
  {
    "spanish": "Uno",
    "english": "One"
  },
  {
    "spanish": "Dos",
    "english": "Two"
  },
  {
    "spanish": "Tres",
    "english": "Three"
  },
  {
    "spanish": "Cuatro",
    "english": "Four"
  },
  {
    "spanish": "Cinco",
    "english": "Five"
  },
  {
    "spanish": "Seis",
    "english": "Six"
  },
  {
    "spanish": "Siete",
    "english": "Seven"
  },
  {
    "spanish": "Ocho",
    "english": "Eight"
  },
  {
    "spanish": "Nueve",
    "english": "Nine"
  },
  {
    "spanish": "Diez",
    "english": "Ten"
  },
  {
    "spanish": "Once",
    "english": "Eleven"
  },
  {
    "spanish": "Doce",
    "english": "Twelve"
  },
  {
    "spanish": "Trece",
    "english": "Thirteen"
  },
  {
    "spanish": "Catorce",
    "english": "Fourteen"
  },
  {
    "spanish": "Quince",
    "english": "Fifteen"
  },
  {
    "spanish": "Dieciséis",
    "english": "Sixteen"
  },
  {
    "spanish": "Diecisiete",
    "english": "Seventeen"
  },
  {
    "spanish": "Dieciocho",
    "english": "Eighteen"
  },
  {
    "spanish": "Diecinueve",
    "english": "Nineteen"
  },
  {
    "spanish": "Veinte",
    "english": "Twenty"
  },
  {
    "spanish": "Veintiuno",
    "english": "Twenty-one"
  },
  {
    "spanish": "Treinta",
    "english": "Thirty"
  },
  {
    "spanish": "Cuarenta",
    "english": "Forty"
  },
  {
    "spanish": "Cincuenta",
    "english": "Fifty"
  },
  {
    "spanish": "Sesenta",
    "english": "Sixty"
  },
  {
    "spanish": "Setenta",
    "english": "Seventy"
  },
  {
    "spanish": "Ochenta",
    "english": "Eighty"
  },
  {
    "spanish": "Noventa",
    "english": "Ninety"
  },
  {
    "spanish": "Cien",
    "english": "One hundred"
  },
  {
    "spanish": "Doscientos",
    "english": "Two hundred"
  },
  {
    "spanish": "Mil",
    "english": "One thousand"
  },
  {
    "spanish": "Millón",
    "english": "Million"
  },
  {
    "spanish": "Primero/a",
    "english": "First (masculine/feminine)"
  },
  {
    "spanish": "Segundo/a",
    "english": "Second (masculine/feminine)"
  },
  {
    "spanish": "Tercero/a",
    "english": "Third (masculine/feminine)"
  },
  {
    "spanish": "Cuarto/a",
    "english": "Fourth (masculine/feminine)"
  },
  {
    "spanish": "Quinto/a",
    "english": "Fifth (masculine/feminine)"
  },
  {
    "spanish": "El coche",
    "english": "The car"
  },
  {
    "spanish": "El autobús",
    "english": "The bus"
  },
  {
    "spanish": "La bicicleta",
    "english": "The bicycle"
  },
  {
    "spanish": "El avión",
    "english": "The airplane"
  },
  {
    "spanish": "El barco",
    "english": "The boat"
  },
  {
    "spanish": "La estación de tren",
    "english": "The train station"
  },
  {
    "spanish": "El aeropuerto",
    "english": "The airport"
  },
  {
    "spanish": "El puerto",
    "english": "The port"
  },
  {
    "spanish": "El conductor/la conductora",
    "english": "The driver (masculine/feminine)"
  },
  {
    "spanish": "El pasajero/la pasajera",
    "english": "The passenger (masculine/feminine)"
  },
  {
    "spanish": "El equipaje",
    "english": "The luggage"
  },
  {
    "spanish": "La maleta",
    "english": "The suitcase"
  },
  {
    "spanish": "El pasaporte",
    "english": "The passport"
  },
  {
    "spanish": "La visa",
    "english": "The visa"
  },
  {
    "spanish": "La aduana",
    "english": "The customs"
  },
  {
    "spanish": "La inmigración",
    "english": "The immigration"
  },
  {
    "spanish": "La terminal",
    "english": "The terminal"
  },
  {
    "spanish": "La puerta de embarque",
    "english": "The boarding gate"
  },
  {
    "spanish": "El vuelo",
    "english": "The flight"
  },
  {
    "spanish": "El retraso",
    "english": "The delay"
  },
  {
    "spanish": "La cancelación",
    "english": "The cancellation"
  },
  {
    "spanish": "El asiento",
    "english": "The seat"
  },
  {
    "spanish": "Ventana",
    "english": "Window"
  },
  {
    "spanish": "Pasillo",
    "english": "Aisle"
  },
  {
    "spanish": "El hotel",
    "english": "The hotel"
  },
  {
    "spanish": "La recepción",
    "english": "The reception desk"
  },
  {
    "spanish": "El recepcionista/la recepcionista",
    "english": "The receptionist (masculine/feminine)"
  },
  {
    "spanish": "La llave",
    "english": "The key"
  },
  {
    "spanish": "La habitación",
    "english": "The room"
  },
  {
    "spanish": "Individual",
    "english": "Single"
  },
  {
    "spanish": "Doble",
    "english": "Double"
  },
  {
    "spanish": "Con vistas",
    "english": "With a view"
  },
  {
    "spanish": "El desayuno está incluido",
    "english": "Breakfast is included"
  },
  {
    "spanish": "El gimnasio",
    "english": "The gym"
  },
  {
    "spanish": "La piscina",
    "english": "The swimming pool"
  },
  {
    "spanish": "El restaurante",
    "english": "The restaurant"
  },
  {
    "spanish": "El bar",
    "english": "The bar"
  },
  {
    "spanish": "El servicio de habitaciones",
    "english": "Room service"
  },
  {
    "spanish": "La lavandería",
    "english": "The laundry"
  },
  {
    "spanish": "El centro de la ciudad",
    "english": "The city center"
  },
  {
    "spanish": "El pueblo",
    "english": "The town/village"
  },
  {
    "spanish": "La playa",
    "english": "The beach"
  },
  {
    "spanish": "Las montañas",
    "english": "The mountains"
  },
  {
    "spanish": "El río",
    "english": "The river"
  },
  {
    "spanish": "El lago",
    "english": "The lake"
  },
  {
    "spanish": "El bosque",
    "english": "The forest"
  },
  {
    "spanish": "El parque",
    "english": "The park"
  },
  {
    "spanish": "El museo",
    "english": "The museum"
  },
  {
    "spanish": "La iglesia",
    "english": "The church"
  },
  {
    "spanish": "El castillo",
    "english": "The castle"
  },
  {
    "spanish": "La catedral",
    "english": "The cathedral"
  },
  {
    "spanish": "El puente",
    "english": "The bridge"
  },
  {
    "spanish": "La plaza",
    "english": "The square"
  },
  {
    "spanish": "El monumento",
    "english": "The monument"
  },
  {
    "spanish": "El centro histórico",
    "english": "The historic center"
  },
  {
    "spanish": "La zona peatonal",
    "english": "The pedestrian zone"
  },
  {
    "spanish": "La zona comercial",
    "english": "The commercial area"
  },
  {
    "spanish": "El cajero automático",
    "english": "The ATM"
  },
  {
    "spanish": "La oficina de turismo",
    "english": "The tourist office"
  },
  {
    "spanish": "La policía",
    "english": "The police"
  },
  {
    "spanish": "La estación de bomberos",
    "english": "The fire station"
  },
  {
    "spanish": "El hospital",
    "english": "The hospital"
  },
  {
    "spanish": "La farmacia",
    "english": "The pharmacy"
  },
  {
    "spanish": "La gasolinera",
    "english": "The gas station"
  },
  {
    "spanish": "El aparcamiento",
    "english": "The parking lot"
  },
  {
    "spanish": "El horario",
    "english": "The schedule/hours"
  },
  {
    "spanish": "Abierto de... a...",
    "english": "Open from... to..."
  },
  {
    "spanish": "Cerrado",
    "english": "Closed"
  },
  {
    "spanish": "Entrada",
    "english": "Entrance"
  },
  {
    "spanish": "Salida",
    "english": "Exit"
  },
  {
    "spanish": "Prohibido",
    "english": "Forbidden/Prohibited"
  },
  {
    "spanish": "No fumar",
    "english": "No smoking"
  },
  {
    "spanish": "Silencio",
    "english": "Silence"
  },
  {
    "spanish": "Peligro",
    "english": "Danger"
  },
  {
    "spanish": "Información",
    "english": "Information"
  },
  {
    "spanish": "Servicios",
    "english": "Services/Restrooms"
  },
  {
    "spanish": "Gratis",
    "english": "Free (of charge)"
  },
  {
    "spanish": "De pago",
    "english": "Paid"
  },
  {
    "spanish": "La tienda",
    "english": "The store"
  },
  {
    "spanish": "El supermercado",
    "english": "The supermarket"
  },
  {
    "spanish": "La panadería",
    "english": "The bakery"
  },
  {
    "spanish": "La carnicería",
    "english": "The butcher shop"
  },
  {
    "spanish": "La pescadería",
    "english": "The fish market"
  },
  {
    "spanish": "La frutería",
    "english": "The fruit store"
  },
  {
    "spanish": "La librería",
    "english": "The bookstore"
  },
  {
    "spanish": "La papelería",
    "english": "The stationery store"
  },
  {
    "spanish": "La ropa",
    "english": "The clothes"
  },
  {
    "spanish": "Los zapatos",
    "english": "The shoes"
  },
  {
    "spanish": "Los accesorios",
    "english": "The accessories"
  },
  {
    "spanish": "El tamaño",
    "english": "The size"
  },
  {
    "spanish": "El precio",
    "english": "The price"
  },
  {
    "spanish": "La rebaja",
    "english": "The sale/discount"
  },
  {
    "spanish": "La oferta",
    "english": "The offer"
  },
  {
    "spanish": "Quisiera...",
    "english": "I would like..."
  },
  {
    "spanish": "Me gustaría...",
    "english": "I would like..."
  },
  {
    "spanish": "¿Me puede ayudar?",
    "english": "Can you help me?"
  },
  {
    "spanish": "¿Me puede enseñar esto?",
    "english": "Can you show me this?"
  },
  {
    "spanish": "¿Lo tiene en otra talla?",
    "english": "Do you have it in another size?"
  },
  {
    "spanish": "¿Lo tiene en otro color?",
    "english": "Do you have it in another color?"
  },
  {
    "spanish": "Me lo llevo",
    "english": "I'll take it"
  },
  {
    "spanish": "Lo compro",
    "english": "I'll buy it"
  },
  {
    "spanish": "¿Cuánto es?",
    "english": "How much is it?"
  },
  {
    "spanish": "¿Puedo pagar con tarjeta?",
    "english": "Can I pay with card?"
  },
  {
    "spanish": "¿Puedo pagar en efectivo?",
    "english": "Can I pay with cash?"
  },
  {
    "spanish": "La factura",
    "english": "The invoice/bill"
  },
  {
    "spanish": "El recibo",
    "english": "The receipt"
  },
  {
    "spanish": "Cambio",
    "english": "Change (money back)"
  },
  {
    "spanish": "Está bien",
    "english": "It's okay/It's good"
  },
  {
    "spanish": "No está bien",
    "english": "It's not okay"
  },
  {
    "spanish": "Muy bien",
    "english": "Very good"
  },
  {
    "spanish": "Excelente",
    "english": "Excellent"
  },
  {
    "spanish": "Terrible",
    "english": "Terrible"
  },
  {
    "spanish": "Fenomenal",
    "english": "Phenomenal"
  },
  {
    "spanish": "Increíble",
    "english": "Incredible"
  },
  {
    "spanish": "Maravilloso/a",
    "english": "Wonderful (masculine/feminine)"
  },
  {
    "spanish": "Horrible",
    "english": "Horrible"
  },
  {
    "spanish": "Lo siento mucho",
    "english": "I'm very sorry"
  },
  {
    "spanish": "Discúlpame",
    "english": "Excuse me/Forgive me (informal)"
  },
  {
    "spanish": "Disculpe",
    "english": "Excuse me/Forgive me (formal)"
  },
  {
    "spanish": "Gracias por todo",
    "english": "Thanks for everything"
  },
  {
    "spanish": "Ha sido un placer",
    "english": "It's been a pleasure"
  },
  {
    "spanish": "Nos vemos",
    "english": "See you"
  },
  {
    "spanish": "Cuídate",
    "english": "Take care (informal)"
  },
  {
    "spanish": "Cuídese",
    "english": "Take care (formal)"
  },
  {
    "spanish": "Que te vaya bien",
    "english": "Hope it goes well for you (informal)"
  },
  {
    "spanish": "Que le vaya bien",
    "english": "Hope it goes well for you (formal)"
  },
  {
    "spanish": "Buen viaje",
    "english": "Have a good trip"
  },
  {
    "spanish": "Disfruta",
    "english": "Enjoy (informal)"
  },
  {
    "spanish": "Disfrute",
    "english": "Enjoy (formal)"
  },
  {
    "spanish": "Felicidades",
    "english": "Congratulations"
  },
  {
    "spanish": "Aniversario",
    "english": "Anniversary"
  },
  {
    "spanish": "Cumpleaños",
    "english": "Birthday"
  },
  {
    "spanish": "Boda",
    "english": "Wedding"
  },
  {
    "spanish": "Funeral",
    "english": "Funeral"
  },
  {
    "spanish": "Fiesta",
    "english": "Party"
  },
  {
    "spanish": "Reunión",
    "english": "Meeting"
  },
  {
    "spanish": "Cita",
    "english": "Appointment/Date"
  },
  {
    "spanish": "Urgente",
    "english": "Urgent"
  },
  {
    "spanish": "Importante",
    "english": "Important"
  },
  {
    "spanish": "Es necesario",
    "english": "It's necessary"
  },
  {
    "spanish": "Es posible",
    "english": "It's possible"
  },
  {
    "spanish": "Es imposible",
    "english": "It's impossible"
  },
  {
    "spanish": "Es probable",
    "english": "It's probable"
  },
  {
    "spanish": "No estoy seguro/a",
    "english": "I'm not sure (masculine/feminine)"
  },
  {
    "spanish": "No lo sé",
    "english": "I don't know"
  },
  {
    "spanish": "Sé",
    "english": "I know"
  },
  {
    "spanish": "Creo que sí",
    "english": "I think so"
  },
  {
    "spanish": "Creo que no",
    "english": "I don't think so"
  },
  {
    "spanish": "Me parece que sí",
    "english": "It seems so to me"
  },
  {
    "spanish": "Me parece que no",
    "english": "It doesn't seem so to me"
  },
  {
    "spanish": "¿Me entiendes?",
    "english": "Do you understand me? (informal)"
  },
  {
    "spanish": "¿Me entiende?",
    "english": "Do you understand me? (formal)"
  },
  {
    "spanish": "Quiero aprender",
    "english": "I want to learn"
  },
  {
    "spanish": "Quiero practicar",
    "english": "I want to practice"
  },
  {
    "spanish": "¿Me puedes corregir?",
    "english": "Can you correct me? (informal)"
  },
  {
    "spanish": "¿Me puede corregir?",
    "english": "Can you correct me? (formal)"
  },
  {
    "spanish": "Estoy perdido/a",
    "english": "I'm lost (masculine/feminine)"
  },
  {
    "spanish": "¿Me puede indicar el camino?",
    "english": "Can you show me the way? (formal)"
  },
  {
    "spanish": "¿Me puedes indicar el camino?",
    "english": "Can you show me the way? (informal)"
  },
  {
    "spanish": "¿A qué distancia está?",
    "english": "How far is it?"
  },
  {
    "spanish": "¿Hay un baño cerca?",
    "english": "Is there a bathroom nearby?"
  },
  {
    "spanish": "¿Hay un cajero automático cerca?",
    "english": "Is there an ATM nearby?"
  },
  {
    "spanish": "¿Hay un restaurante cerca?",
    "english": "Is there a restaurant nearby?"
  },
  {
    "spanish": "¿Qué hay para ver aquí?",
    "english": "What is there to see here?"
  },
  {
    "spanish": "¿Hay visitas guiadas?",
    "english": "Are there guided tours?"
  },
  {
    "spanish": "¿Cuánto dura?",
    "english": "How long does it last?"
  },
  {
    "spanish": "¿A qué hora cierra?",
    "english": "What time does it close?"
  },
  {
    "spanish": "¿A qué hora abre?",
    "english": "What time does it open?"
  },
  {
    "spanish": "¿Es gratis la entrada?",
    "english": "Is admission free?"
  },
  {
    "spanish": "¿Es caro?",
    "english": "Is it expensive?"
  },
  {
    "spanish": "¿Es barato?",
    "english": "Is it cheap?"
  },
  {
    "spanish": "Rebajado",
    "english": "Reduced (price)"
  },
  {
    "spanish": "No funciona",
    "english": "It doesn't work"
  },
  {
    "spanish": "Está roto/a",
    "english": "It's broken (masculine/feminine)"
  },
  {
    "spanish": "Me duele",
    "english": "It hurts me"
  },
  {
    "spanish": "Tengo fiebre",
    "english": "I have a fever"
  },
  {
    "spanish": "Me siento mal",
    "english": "I feel bad"
  },
  {
    "spanish": "Necesito ayuda",
    "english": "I need help"
  },
  {
    "spanish": "¿Puede llamar a una ambulancia?",
    "english": "Can you call an ambulance?"
  },
  {
    "spanish": "¿Puede llamar a la policía?",
    "english": "Can you call the police?"
  },
  {
    "spanish": "Me han robado",
    "english": "I have been robbed"
  },
  {
    "spanish": "Perdí mi pasaporte",
    "english": "I lost my passport"
  },
  {
    "spanish": "Perdí mi billetera",
    "english": "I lost my wallet"
  },
  {
    "spanish": "Mi teléfono no funciona",
    "english": "My phone doesn't work"
  },
  {
    "spanish": "Estoy buscando a...",
    "english": "I am looking for..."
  },
  {
    "spanish": "Este es mi amigo/a",
    "english": "This is my friend (masculine/feminine)"
  },
  {
    "spanish": "Mi nombre es...",
    "english": "My name is..."
  },
  {
    "spanish": "Un placer conocerte",
    "english": "Nice to meet you (informal)"
  },
  {
    "spanish": "Un placer conocerle",
    "english": "Nice to meet you (formal)"
  },
  {
    "spanish": "Bienvenido/a",
    "english": "Welcome (masculine/feminine)"
  },
  {
    "spanish": "¿Puedes hablar más lento?",
    "english": "Can you speak more slowly? (informal)"
  },
  {
    "spanish": "¿Puede hablar más lento?",
    "english": "Can you speak more slowly? (formal)"
  },
  {
    "spanish": "¿Puedes escribirlo?",
    "english": "Can you write it? (informal)"
  },
  {
    "spanish": "¿Puede escribirlo?",
    "english": "Can you write it? (formal)"
  },
  {
    "spanish": "¿Puedes deletrearlo?",
    "english": "Can you spell it? (informal)"
  },
  {
    "spanish": "¿Puede deletrearlo?",
    "english": "Can you spell it? (formal)"
  },
  {
    "spanish": "¿Puedes traducirlo?",
    "english": "Can you translate it? (informal)"
  },
  {
    "spanish": "¿Puede traducirlo?",
    "english": "Can you translate it? (formal)"
  },
  {
    "spanish": "¿Me puedes mostrar?",
    "english": "Can you show me? (informal)"
  },
  {
    "spanish": "¿Me puede mostrar?",
    "english": "Can you show me? (formal)"
  },
  {
    "spanish": "¿Qué es esto?",
    "english": "What is this?"
  },
  {
    "spanish": "¿Qué es eso?",
    "english": "What is that?"
  },
  {
    "spanish": "¿Quién es?",
    "english": "Who is it?"
  },
  {
    "spanish": "¿Qué día es hoy?",
    "english": "What day is today?"
  },
  {
    "spanish": "¿Qué fecha es hoy?",
    "english": "What date is today?"
  },
  {
    "spanish": "El sol",
    "english": "The sun"
  },
  {
    "spanish": "La luna",
    "english": "The moon"
  },
  {
    "spanish": "Las estrellas",
    "english": "The stars"
  },
  {
    "spanish": "El cielo",
    "english": "The sky"
  },
  {
    "spanish": "La tierra",
    "english": "The earth"
  },
  {
    "spanish": "El mar",
    "english": "The sea"
  },
  {
    "spanish": "El río",
    "english": "The river"
  },
  {
    "spanish": "El lago",
    "english": "The lake"
  },
  {
    "spanish": "La montaña",
    "english": "The mountain"
  },
  {
    "spanish": "El árbol",
    "english": "The tree"
  },
  {
    "spanish": "La flor",
    "english": "The flower"
  },
  {
    "spanish": "El animal",
    "english": "The animal"
  },
  {
    "spanish": "El perro",
    "english": "The dog"
  },
  {
    "spanish": "El gato",
    "english": "The cat"
  },
  {
    "spanish": "El pájaro",
    "english": "The bird"
  },
  {
    "spanish": "El pez",
    "english": "The fish"
  },
  {
    "spanish": "El caballo",
    "english": "The horse"
  },
  {
    "spanish": "La vaca",
    "english": "The cow"
  },
  {
    "spanish": "El cerdo",
    "english": "The pig"
  },
  {
    "spanish": "La oveja",
    "english": "The sheep"
  },
  {
    "spanish": "El pollo",
    "english": "The chicken"
  },
  {
    "spanish": "El ratón",
    "english": "The mouse"
  },
  {
    "spanish": "La serpiente",
    "english": "The snake"
  },
  {
    "spanish": "La araña",
    "english": "The spider"
  },
  {
    "spanish": "La abeja",
    "english": "The bee"
  },
  {
    "spanish": "La mosca",
    "english": "The fly"
  },
  {
    "spanish": "El mosquito",
    "english": "The mosquito"
  },
  {
    "spanish": "La hormiga",
    "english": "The ant"
  },
  {
    "spanish": "La mariposa",
    "english": "The butterfly"
  },
  {
    "spanish": "El león",
    "english": "The lion"
  },
  {
    "spanish": "El tigre",
    "english": "The tiger"
  },
  {
    "spanish": "El elefante",
    "english": "The elephant"
  },
  {
    "spanish": "El mono",
    "english": "The monkey"
  },
  {
    "spanish": "La jirafa",
    "english": "The giraffe"
  },
  {
    "spanish": "El cocodrilo",
    "english": "The crocodile"
  },
  {
    "spanish": "El oso",
    "english": "The bear"
  },
  {
    "spanish": "El lobo",
    "english": "The wolf"
  },
  {
    "spanish": "El zorro",
    "english": "The fox"
  },
  {
    "spanish": "El conejo",
    "english": "The rabbit"
  },
  {
    "spanish": "El ciervo",
    "english": "The deer"
  },
  {
    "spanish": "La rana",
    "english": "The frog"
  },
  {
    "spanish": "El pato",
    "english": "The duck"
  },
  {
    "spanish": "El ganso",
    "english": "The goose"
  },
  {
    "spanish": "El gallo",
    "english": "The rooster"
  },
  {
    "spanish": "La gallina",
    "english": "The hen"
  },
  {
    "spanish": "El huevo",
    "english": "The egg"
  },
  {
    "spanish": "El nido",
    "english": "The nest"
  },
  {
    "spanish": "El ala",
    "english": "The wing"
  },
  {
    "spanish": "La cola",
    "english": "The tail"
  },
  {
    "spanish": "La piel",
    "english": "The skin/fur"
  },
  {
    "spanish": "La pluma",
    "english": "The feather"
  },
  {
    "spanish": "El hueso",
    "english": "The bone"
  },
  {
    "spanish": "La sangre",
    "english": "The blood"
  },
  {
    "spanish": "El corazón",
    "english": "The heart"
  },
  {
    "spanish": "El cerebro",
    "english": "The brain"
  },
  {
    "spanish": "El ojo",
    "english": "The eye"
  },
  {
    "spanish": "La oreja",
    "english": "The ear"
  },
  {
    "spanish": "La nariz",
    "english": "The nose"
  },
  {
    "spanish": "La boca",
    "english": "The mouth"
  },
  {
    "spanish": "El diente",
    "english": "The tooth"
  },
  {
    "spanish": "La lengua",
    "english": "The tongue"
  },
  {
    "spanish": "La cara",
    "english": "The face"
  },
  {
    "spanish": "El pelo",
    "english": "The hair"
  },
  {
    "spanish": "El cuello",
    "english": "The neck"
  },
  {
    "spanish": "El hombro",
    "english": "The shoulder"
  },
  {
    "spanish": "El brazo",
    "english": "The arm"
  },
  {
    "spanish": "La mano",
    "english": "The hand"
  },
  {
    "spanish": "El dedo",
    "english": "The finger/toe"
  },
  {
    "spanish": "La uña",
    "english": "The nail"
  },
  {
    "spanish": "La pierna",
    "english": "The leg"
  },
  {
    "spanish": "El pie",
    "english": "The foot"
  },
  {
    "spanish": "La rodilla",
    "english": "The knee"
  },
  {
    "spanish": "El codo",
    "english": "The elbow"
  },
  {
    "spanish": "El estómago",
    "english": "The stomach"
  },
  {
    "spanish": "La espalda",
    "english": "The back"
  },
  {
    "spanish": "El pecho",
    "english": "The chest"
  },
  {
    "spanish": "El cuerpo",
    "english": "The body"
  },
  {
    "spanish": "La cabeza",
    "english": "The head"
  },
  {
    "spanish": "El cerebro",
    "english": "The brain"
  },
  {
    "spanish": "El alma",
    "english": "The soul"
  },
  {
    "spanish": "El espíritu",
    "english": "The spirit"
  },
  {
    "spanish": "La vida",
    "english": "The life"
  },
  {
    "spanish": "La muerte",
    "english": "The death"
  },
  {
    "spanish": "El nacimiento",
    "english": "The birth"
  },
  {
    "spanish": "La niñez",
    "english": "The childhood"
  },
  {
    "spanish": "La adolescencia",
    "english": "The adolescence"
  },
  {
    "spanish": "La juventud",
    "english": "The youth"
  },
  {
    "spanish": "La edad adulta",
    "english": "The adulthood"
  },
  {
    "spanish": "La vejez",
    "english": "The old age"
  },
  {
    "spanish": "La familia",
    "english": "The family"
  },
  {
    "spanish": "Los padres",
    "english": "The parents"
  },
  {
    "spanish": "El padre",
    "english": "The father"
  },
  {
    "spanish": "La madre",
    "english": "The mother"
  },
  {
    "spanish": "Los hijos",
    "english": "The children"
  },
  {
    "spanish": "El hijo",
    "english": "The son"
  },
  {
    "spanish": "La hija",
    "english": "The daughter"
  },
  {
    "spanish": "Los hermanos",
    "english": "The siblings"
  },
  {
    "spanish": "El hermano",
    "english": "The brother"
  },
  {
    "spanish": "La hermana",
    "english": "The sister"
  },
  {
    "spanish": "Los abuelos",
    "english": "The grandparents"
  },
  {
    "spanish": "El abuelo",
    "english": "The grandfather"
  },
  {
    "spanish": "La abuela",
    "english": "The grandmother"
  },
  {
    "spanish": "Los tíos",
    "english": "The uncles/aunts"
  },
  {
    "spanish": "El tío",
    "english": "The uncle"
  },
  {
    "spanish": "La tía",
    "english": "The aunt"
  },
  {
    "spanish": "Los primos",
    "english": "The cousins"
  },
  {
    "spanish": "El primo",
    "english": "The male cousin"
  },
  {
    "spanish": "La prima",
    "english": "The female cousin"
  },
  {
    "spanish": "Los sobrinos",
    "english": "The nephews/nieces"
  },
  {
    "spanish": "El sobrino",
    "english": "The nephew"
  },
  {
    "spanish": "La sobrina",
    "english": "The niece"
  },
  {
    "spanish": "Los nietos",
    "english": "The grandchildren"
  },
  {
    "spanish": "El nieto",
    "english": "The grandson"
  },
  {
    "spanish": "La nieta",
    "english": "The granddaughter"
  },
  {
    "spanish": "El marido",
    "english": "The husband"
  },
  {
    "spanish": "La mujer",
    "english": "The wife"
  },
  {
    "spanish": "El esposo",
    "english": "The husband (more formal)"
  },
  {
    "spanish": "La esposa",
    "english": "The wife (more formal)"
  },
  {
    "spanish": "El novio",
    "english": "The boyfriend/fiancé"
  },
  {
    "spanish": "La novia",
    "english": "The girlfriend/fiancée"
  },
  {
    "spanish": "El amigo",
    "english": "The friend (male)"
  },
  {
    "spanish": "La amiga",
    "english": "The friend (female)"
  },
  {
    "spanish": "El vecino",
    "english": "The neighbor (male)"
  },
  {
    "spanish": "La vecina",
    "english": "The neighbor (female)"
  },
  {
    "spanish": "El colega",
    "english": "The colleague (male)"
  },
  {
    "spanish": "La colega",
    "english": "The colleague (female)"
  },
  {
    "spanish": "El jefe",
    "english": "The boss (male)"
  },
  {
    "spanish": "La jefa",
    "english": "The boss (female)"
  },
  {
    "spanish": "El profesor",
    "english": "The teacher (male)"
  },
  {
    "spanish": "La profesora",
    "english": "The teacher (female)"
  },
  {
    "spanish": "El estudiante",
    "english": "The student (male)"
  },
  {
    "spanish": "La estudiante",
    "english": "The student (female)"
  },
  {
    "spanish": "El doctor",
    "english": "The doctor (male)"
  },
  {
    "spanish": "La doctora",
    "english": "The doctor (female)"
  },
  {
    "spanish": "El ingeniero",
    "english": "The engineer (male)"
  },
  {
    "spanish": "La ingeniera",
    "english": "The engineer (female)"
  },
  {
    "spanish": "El abogado",
    "english": "The lawyer (male)"
  },
  {
    "spanish": "La abogada",
    "english": "The lawyer (female)"
  },
  {
    "spanish": "El artista",
    "english": "The artist (male)"
  },
  {
    "spanish": "La artista",
    "english": "The artist (female)"
  },
  {
    "spanish": "El escritor",
    "english": "The writer (male)"
  },
  {
    "spanish": "La escritora",
    "english": "The writer (female)"
  },
  {
    "spanish": "El músico",
    "english": "The musician (male)"
  },
  {
    "spanish": "La música",
    "english": "The musician (female)"
  },
  {
    "spanish": "El deportista",
    "english": "The athlete (male)"
  },
  {
    "spanish": "La deportista",
    "english": "The athlete (female)"
  },
  {
    "spanish": "El cocinero",
    "english": "The cook (male)"
  },
  {
    "spanish": "La cocinera",
    "english": "The cook (female)"
  },
  {
    "spanish": "El camarero",
    "english": "The waiter (male)"
  },
  {
    "spanish": "La camarera",
    "english": "The waitress (female)"
  },
  {
    "spanish": "El policía",
    "english": "The police officer (male)"
  },
  {
    "spanish": "La policía",
    "english": "The police officer (female)"
  },
  {
    "spanish": "El bombero",
    "english": "The firefighter (male)"
  },
  {
    "spanish": "La bombera",
    "english": "The firefighter (female)"
  },
  {
    "spanish": "El soldado",
    "english": "The soldier (male)"
  },
  {
    "spanish": "La soldado",
    "english": "The soldier (female)"
  },
  {
    "spanish": "El marinero",
    "english": "The sailor (male)"
  },
  {
    "spanish": "La marinera",
    "english": "The sailor (female)"
  },
  {
    "spanish": "El piloto",
    "english": "The pilot (male)"
  },
  {
    "spanish": "La piloto",
    "english": "The pilot (female)"
  },
  {
    "spanish": "El astronauta",
    "english": "The astronaut (male)"
  },
  {
    "spanish": "La astronauta",
    "english": "The astronaut (female)"
  },
  {
    "spanish": "El científico",
    "english": "The scientist (male)"
  },
  {
    "spanish": "La científica",
    "english": "The scientist (female)"
  },
  {
    "spanish": "El político",
    "english": "The politician (male)"
  },
  {
    "spanish": "La política",
    "english": "The politician (female)"
  },
  {
    "spanish": "El presidente",
    "english": "The president (male)"
  },
  {
    "spanish": "La presidenta",
    "english": "The president (female)"
  },
  {
    "spanish": "El rey",
    "english": "The king"
  },
  {
    "spanish": "La reina",
    "english": "The queen"
  },
  {
    "spanish": "El príncipe",
    "english": "The prince"
  },
  {
    "spanish": "La princesa",
    "english": "The princess"
  },
  {
    "spanish": "El héroe",
    "english": "The hero"
  },
  {
    "spanish": "La heroína",
    "english": "The heroine"
  },
  {
    "spanish": "El villano",
    "english": "The villain (male)"
  },
  {
    "spanish": "La villana",
    "english": "The villain (female)"
  },
  {
    "spanish": "El santo",
    "english": "The saint (male)"
  },
  {
    "spanish": "La santa",
    "english": "The saint (female)"
  },
  {
    "spanish": "El ángel",
    "english": "The angel"
  },
  {
    "spanish": "El diablo",
    "english": "The devil"
  },
  {
    "spanish": "Dios",
    "english": "God"
  },
  {
    "spanish": "La religión",
    "english": "The religion"
  },
  {
    "spanish": "La fe",
    "english": "The faith"
  },
  {
    "spanish": "La iglesia",
    "english": "The church"
  },
  {
    "spanish": "El templo",
    "english": "The temple"
  },
  {
    "spanish": "La mezquita",
    "english": "The mosque"
  },
  {
    "spanish": "La sinagoga",
    "english": "The synagogue"
  },
  {
    "spanish": "El monasterio",
    "english": "The monastery"
  },
  {
    "spanish": "El sacerdote",
    "english": "The priest"
  },
  {
    "spanish": "El monje",
    "english": "The monk"
  },
  {
    "spanish": "La monja",
    "english": "The nun"
  },
  {
    "spanish": "La oración",
    "english": "The prayer"
  },
  {
    "spanish": "La meditación",
    "english": "The meditation"
  },
  {
    "spanish": "La paz",
    "english": "The peace"
  },
  {
    "spanish": "La guerra",
    "english": "The war"
  },
  {
    "spanish": "La libertad",
    "english": "The freedom"
  },
  {
    "spanish": "La justicia",
    "english": "The justice"
  },
  {
    "spanish": "La igualdad",
    "english": "The equality"
  },
  {
    "spanish": "La diversidad",
    "english": "The diversity"
  },
  {
    "spanish": "El respeto",
    "english": "The respect"
  },
  {
    "spanish": "La tolerancia",
    "english": "The tolerance"
  },
  {
    "spanish": "El amor",
    "english": "The love"
  },
  {
    "spanish": "El odio",
    "english": "The hatred"
  },
  {
    "spanish": "La amistad",
    "english": "The friendship"
  },
  {
    "spanish": "La felicidad",
    "english": "The happiness"
  },
  {
    "spanish": "La tristeza",
    "english": "The sadness"
  },
  {
    "spanish": "La alegría",
    "english": "The joy"
  },
  {
    "spanish": "La ira",
    "english": "The anger"
  },
  {
    "spanish": "El miedo",
    "english": "The fear"
  },
  {
    "spanish": "La esperanza",
    "english": "The hope"
  },
  {
    "spanish": "La desesperación",
    "english": "The despair"
  },
  {
    "spanish": "La valentía",
    "english": "The bravery"
  },
  {
    "spanish": "La cobardía",
    "english": "The cowardice"
  },
  {
    "spanish": "La bondad",
    "english": "The kindness"
  },
  {
    "spanish": "La maldad",
    "english": "The wickedness"
  },
  {
    "spanish": "La verdad",
    "english": "The truth"
  },
  {
    "spanish": "La mentira",
    "english": "The lie"
  },
  {
    "spanish": "La honestidad",
    "english": "The honesty"
  },
  {
    "spanish": "La deshonestidad",
    "english": "The dishonesty"
  },
  {
    "spanish": "La confianza",
    "english": "The trust"
  },
  {
    "spanish": "La desconfianza",
    "english": "The distrust"
  },
  {
    "spanish": "La generosidad",
    "english": "The generosity"
  },
  {
    "spanish": "La egoísmo",
    "english": "The selfishness"
  },
  {
    "spanish": "La humildad",
    "english": "The humility"
  },
  {
    "spanish": "La arrogancia",
    "english": "The arrogance"
  },
  {
    "spanish": "La paciencia",
    "english": "The patience"
  },
  {
    "spanish": "La impaciencia",
    "english": "The impatience"
  },
  {
    "spanish": "La creatividad",
    "english": "The creativity"
  },
  {
    "spanish": "La imaginación",
    "english": "The imagination"
  },
  {
    "spanish": "El conocimiento",
    "english": "The knowledge"
  },
  {
    "spanish": "La sabiduría",
    "english": "The wisdom"
  },
  {
    "spanish": "La ignorancia",
    "english": "The ignorance"
  },
  {
    "spanish": "La educación",
    "english": "The education"
  },
  {
    "spanish": "La escuela",
    "english": "The school"
  },
  {
    "spanish": "El colegio",
    "english": "The high school/college"
  },
  {
    "spanish": "La universidad",
    "english": "The university"
  },
  {
    "spanish": "El profesor",
    "english": "The teacher"
  },
  {
    "spanish": "El alumno",
    "english": "The student"
  },
  {
    "spanish": "La clase",
    "english": "The class"
  },
  {
    "spanish": "El examen",
    "english": "The exam"
  },
  {
    "spanish": "La tarea",
    "english": "The homework"
  },
  {
    "spanish": "El libro",
    "english": "The book"
  },
  {
    "spanish": "El cuaderno",
    "english": "The notebook"
  },
  {
    "spanish": "El lápiz",
    "english": "The pencil"
  },
  {
    "spanish": "El bolígrafo",
    "english": "The pen"
  },
  {
    "spanish": "La goma",
    "english": "The eraser"
  },
  {
    "spanish": "La mochila",
    "english": "The backpack"
  },
  {
    "spanish": "La mesa",
    "english": "The table"
  },
  {
    "spanish": "La silla",
    "english": "The chair"
  },
  {
    "spanish": "La puerta",
    "english": "The door"
  },
  {
    "spanish": "La ventana",
    "english": "The window"
  },
  {
    "spanish": "La pared",
    "english": "The wall"
  },
  {
    "spanish": "El techo",
    "english": "The ceiling"
  },
  {
    "spanish": "El suelo",
    "english": "The floor"
  },
  {
    "spanish": "El dormitorio",
    "english": "The bedroom"
  },
  {
    "spanish": "La cocina",
    "english": "The kitchen"
  },
  {
    "spanish": "El baño",
    "english": "The bathroom"
  },
  {
    "spanish": "El salón",
    "english": "The living room"
  },
  {
    "spanish": "El comedor",
    "english": "The dining room"
  },
  {
    "spanish": "El jardín",
    "english": "The garden"
  },
  {
    "spanish": "El balcón",
    "english": "The balcony"
  },
  {
    "spanish": "La terraza",
    "english": "The terrace"
  },
  {
    "spanish": "La casa",
    "english": "The house"
  },
  {
    "spanish": "El apartamento",
    "english": "The apartment"
  },
  {
    "spanish": "El edificio",
    "english": "The building"
  },
  {
    "spanish": "La calle",
    "english": "The street"
  },
  {
    "spanish": "La carretera",
    "english": "The road"
  },
  {
    "spanish": "La autopista",
    "english": "The highway"
  },
  {
    "spanish": "El puente",
    "english": "The bridge"
  },
  {
    "spanish": "El túnel",
    "english": "The tunnel"
  },
  {
    "spanish": "El semáforo",
    "english": "The traffic light"
  },
  {
    "spanish": "La señal",
    "english": "The sign"
  },
  {
    "spanish": "La acera",
    "english": "The sidewalk"
  },
  {
    "spanish": "El cruce",
    "english": "The intersection"
  },
  {
    "spanish": "El aparcamiento",
    "english": "The parking lot"
  },
  {
    "spanish": "La estación de autobús",
    "english": "The bus station"
  },
  {
    "spanish": "La estación de tren",
    "english": "The train station"
  },
  {
    "spanish": "El aeropuerto",
    "english": "The airport"
  },
  {
    "spanish": "El puerto",
    "english": "The port"
  },
  {
    "spanish": "El barco",
    "english": "The boat"
  },
  {
    "spanish": "El avión",
    "english": "The airplane"
  },
  {
    "spanish": "El helicóptero",
    "english": "The helicopter"
  },
  {
    "spanish": "El coche",
    "english": "The car"
  },
  {
    "spanish": "El camión",
    "english": "The truck"
  },
  {
    "spanish": "La moto",
    "english": "The motorcycle"
  },
  {
    "spanish": "La bicicleta",
    "english": "The bicycle"
  },
  {
    "spanish": "El taxi",
    "english": "The taxi"
  },
  {
    "spanish": "El autobús",
    "english": "The bus"
  },
  {
    "spanish": "El tren",
    "english": "The train"
  },
  {
    "spanish": "El metro",
    "english": "The subway"
  },
  {
    "spanish": "El tranvía",
    "english": "The tram"
  },
  {
    "spanish": "El barco de pasajeros",
    "english": "The passenger ship"
  },
  {
    "spanish": "El ferry",
    "english": "The ferry"
  },
  {
    "spanish": "El crucero",
    "english": "The cruise ship"
  },
  {
    "spanish": "El viaje",
    "english": "The trip"
  },
  {
    "spanish": "Las vacaciones",
    "english": "The vacation"
  },
  {
    "spanish": "El pasaporte",
    "english": "The passport"
  },
  {
    "spanish": "La visa",
    "english": "The visa"
  },
  {
    "spanish": "El billete",
    "english": "The ticket"
  },
  {
    "spanish": "El equipaje",
    "english": "The luggage"
  },
  {
    "spanish": "La maleta",
    "english": "The suitcase"
  },
  {
    "spanish": "La mochila",
    "english": "The backpack"
  },
  {
    "spanish": "El mapa",
    "english": "The map"
  },
  {
    "spanish": "La guía",
    "english": "The guide"
  },
  {
    "spanish": "El hotel",
    "english": "The hotel"
  },
  {
    "spanish": "El albergue",
    "english": "The hostel"
  },
  {
    "spanish": "La pensión",
    "english": "The guesthouse"
  },
  {
    "spanish": "El camping",
    "english": "The campsite"
  },
  {
    "spanish": "La tienda de campaña",
    "english": "The tent"
  },
  {
    "spanish": "El saco de dormir",
    "english": "The sleeping bag"
  },
  {
    "spanish": "La linterna",
    "english": "The flashlight"
  },
  {
    "spanish": "La brújula",
    "english": "The compass"
  },
  {
    "spanish": "El protector solar",
    "english": "The sunscreen"
  },
  {
    "spanish": "Las gafas de sol",
    "english": "The sunglasses"
  },
  {
    "spanish": "El sombrero",
    "english": "The hat"
  },
  {
    "spanish": "La chaqueta",
    "english": "The jacket"
  },
  {
    "spanish": "El impermeable",
    "english": "The raincoat"
  },
  {
    "spanish": "El paraguas",
    "english": "The umbrella"
  },
  {
    "spanish": "Las botas",
    "english": "The boots"
  },
  {
    "spanish": "Las sandalias",
    "english": "The sandals"
  },
  {
    "spanish": "Los zapatos",
    "english": "The shoes"
  },
  {
    "spanish": "La ropa",
    "english": "The clothes"
  },
  {
    "spanish": "La camiseta",
    "english": "The T-shirt"
  },
  {
    "spanish": "La camisa",
    "english": "The shirt"
  },
  {
    "spanish": "Los pantalones",
    "english": "The pants"
  },
  {
    "spanish": "Los vaqueros",
    "english": "The jeans"
  },
  {
    "spanish": "La falda",
    "english": "The skirt"
  },
  {
    "spanish": "El vestido",
    "english": "The dress"
  },
  {
    "spanish": "Los calcetines",
    "english": "The socks"
  },
  {
    "spanish": "La ropa interior",
    "english": "The underwear"
  },
  {
    "spanish": "El pijama",
    "english": "The pajamas"
  },
  {
    "spanish": "El bañador",
    "english": "The swimsuit"
  },
  {
    "spanish": "La toalla",
    "english": "The towel"
  },
  {
    "spanish": "El jabón",
    "english": "The soap"
  },
  {
    "spanish": "El champú",
    "english": "The shampoo"
  },
  {
    "spanish": "El cepillo de dientes",
    "english": "The toothbrush"
  },
  {
    "spanish": "La pasta de dientes",
    "english": "The toothpaste"
  },
  {
    "spanish": "El espejo",
    "english": "The mirror"
  },
  {
    "spanish": "El peine",
    "english": "The comb"
  },
  {
    "spanish": "El cepillo",
    "english": "The brush"
  },
  {
    "spanish": "La navaja de afeitar",
    "english": "The razor"
  },
  {
    "spanish": "La crema de afeitar",
    "english": "The shaving cream"
  },
  {
    "spanish": "El secador de pelo",
    "english": "The hair dryer"
  },
  {
    "spanish": "El maquillaje",
    "english": "The makeup"
  },
  {
    "spanish": "El perfume",
    "english": "The perfume"
  },
  {
    "spanish": "El desodorante",
    "english": "The deodorant"
  },
  {
    "spanish": "El reloj",
    "english": "The watch/clock"
  },
  {
    "spanish": "Las gafas",
    "english": "The glasses"
  },
  {
    "spanish": "Las lentillas",
    "english": "The contact lenses"
  },
  {
    "spanish": "El anillo",
    "english": "The ring"
  },
  {
    "spanish": "El collar",
    "english": "The necklace"
  },
  {
    "spanish": "Los pendientes",
    "english": "The earrings"
  },
  {
    "spanish": "La pulsera",
    "english": "The bracelet"
  },
  {
    "spanish": "El cinturón",
    "english": "The belt"
  },
  {
    "spanish": "El bolso",
    "english": "The handbag"
  },
  {
    "spanish": "La cartera",
    "english": "The wallet"
  },
  {
    "spanish": "Las llaves",
    "english": "The keys"
  },
  {
    "spanish": "El móvil",
    "english": "The cell phone"
  },
  {
    "spanish": "El ordenador",
    "english": "The computer"
  },
  {
    "spanish": "La tableta",
    "english": "The tablet"
  },
  {
    "spanish": "La cámara",
    "english": "The camera"
  },
  {
    "spanish": "El cargador",
    "english": "The charger"
  },
  {
    "spanish": "La batería",
    "english": "The battery"
  },
  {
    "spanish": "El enchufe",
    "english": "The plug"
  },
  {
    "spanish": "El adaptador",
    "english": "The adapter"
  },
  {
    "spanish": "El altavoz",
    "english": "The speaker"
  },
  {
    "spanish": "Los auriculares",
    "english": "The headphones"
  },
  {
    "spanish": "El micrófono",
    "english": "The microphone"
  },
  {
    "spanish": "El televisor",
    "english": "The television"
  },
  {
    "spanish": "La radio",
    "english": "The radio"
  },
  {
    "spanish": "El periódico",
    "english": "The newspaper"
  },
  {
    "spanish": "La revista",
    "english": "The magazine"
  },
  {
    "spanish": "El libro",
    "english": "The book"
  },
  {
    "spanish": "La película",
    "english": "The movie"
  },
  {
    "spanish": "La música",
    "english": "The music"
  },
  {
    "spanish": "La canción",
    "english": "The song"
  },
  {
    "spanish": "El baile",
    "english": "The dance"
  },
  {
    "spanish": "El deporte",
    "english": "The sport"
  },
  {
    "spanish": "El fútbol",
    "english": "Soccer/Football"
  },
  {
    "spanish": "El baloncesto",
    "english": "Basketball"
  },
  {
    "spanish": "El tenis",
    "english": "Tennis"
  },
  {
    "spanish": "La natación",
    "english": "Swimming"
  },
  {
    "spanish": "El ciclismo",
    "english": "Cycling"
  },
  {
    "spanish": "Correr",
    "english": "To run"
  },
  {
    "spanish": "Nadar",
    "english": "To swim"
  },
  {
    "spanish": "Jugar",
    "english": "To play"
  },
  {
    "spanish": "Escuchar",
    "english": "To listen"
  },
  {
    "spanish": "Ver",
    "english": "To watch"
  },
  {
    "spanish": "Leer",
    "english": "To read"
  },
  {
    "spanish": "Escribir",
    "english": "To write"
  },
  {
    "spanish": "Estudiar",
    "english": "To study"
  },
  {
    "spanish": "Aprender",
    "english": "To learn"
  },
  {
    "spanish": "Enseñar",
    "english": "To teach"
  },
  {
    "spanish": "Trabajar",
    "english": "To work"
  },
  {
    "spanish": "Descansar",
    "english": "To rest"
  },
  {
    "spanish": "Comer",
    "english": "To eat"
  },
  {
    "spanish": "Beber",
    "english": "To drink"
  },
  {
    "spanish": "Dormir",
    "english": "To sleep"
  },
  {
    "spanish": "Despertar",
    "english": "To wake up"
  },
  {
    "spanish": "Levantarse",
    "english": "To get up"
  },
  {
    "spanish": "Sentarse",
    "english": "To sit down"
  },
  {
    "spanish": "Caminar",
    "english": "To walk"
  },
  {
    "spanish": "Correr",
    "english": "To run"
  },
  {
    "spanish": "Saltar",
    "english": "To jump"
  },
  {
    "spanish": "Bailar",
    "english": "To dance"
  },
  {
    "spanish": "Cantar",
    "english": "To sing"
  },
  {
    "spanish": "Reír",
    "english": "To laugh"
  },
  {
    "spanish": "Llorar",
    "english": "To cry"
  },
  {
    "spanish": "Sonreír",
    "english": "To smile"
  },
  {
    "spanish": "Pensar",
    "english": "To think"
  },
  {
    "spanish": "Recordar",
    "english": "To remember"
  },
  {
    "spanish": "Olvidar",
    "english": "To forget"
  },
  {
    "spanish": "Entender",
    "english": "To understand"
  },
  {
    "spanish": "Saber",
    "english": "To know"
  },
  {
    "spanish": "Creer",
    "english": "To believe"
  },
  {
    "spanish": "Esperar",
    "english": "To wait/hope"
  },
  {
    "spanish": "Comenzar",
    "english": "To begin"
  },
  {
    "spanish": "Terminar",
    "english": "To finish"
  },
  {
    "spanish": "Ayudar",
    "english": "To help"
  },
  {
    "spanish": "Preguntar",
    "english": "To ask (a question)"
  },
  {
    "spanish": "Responder",
    "english": "To answer"
  },
  {
    "spanish": "Decir",
    "english": "To say/tell"
  },
  {
    "spanish": "Hablar",
    "english": "To speak"
  },
  {
    "spanish": "Escuchar",
    "english": "To listen"
  },
  {
    "spanish": "Mirar",
    "english": "To look"
  },
  {
    "spanish": "Ver",
    "english": "To see"
  },
  {
    "spanish": "Sentir",
    "english": "To feel"
  },
  {
    "spanish": "Dar",
    "english": "To give"
  },
  {
    "spanish": "Tomar",
    "english": "To take/drink"
  },
  {
    "spanish": "Lener",
    "english": "To have"
  },
  {
    "spanish": "Ir",
    "english": "To go"
  },
  {
    "spanish": "Venir",
    "english": "To come"
  },
  {
    "spanish": "Hacer",
    "english": "To do/make"
  },
  {
    "spanish": "Poner",
    "english": "To put"
  },
  {
    "spanish": "Salir",
    "english": "To leave/go out"
  },
  {
    "spanish": "Entrar",
    "english": "To enter"
  },
  {
    "spanish": "Subir",
    "english": "To go up/upload"
  },
  {
    "spanish": "Bajar",
    "english": "To go down/download"
  },
  {
    "spanish": "Abrir",
    "english": "To open"
  },
  {
    "spanish": "Cerrar",
    "english": "To close"
  },
  {
    "spanish": "Perder",
    "english": "To lose"
  },
  {
    "spanish": "Ganar",
    "english": "To win"
  },
  {
    "spanish": "Comprar",
    "english": "To buy"
  },
  {
    "spanish": "Vender",
    "english": "To sell"
  },
  {
    "spanish": "Pagar",
    "english": "To pay"
  },
  {
    "spanish": "Recibir",
    "english": "To receive"
  },
  {
    "spanish": "Enviar",
    "english": "To send"
  },
  {
    "spanish": "Traer",
    "english": "To bring"
  },
  {
    "spanish": "Llevar",
    "english": "To carry/wear"
  },
  {
    "spanish": "Conocer",
    "english": "To know (a person/place)"
  },
  {
    "spanish": "Buscar",
    "english": "To look for"
  },
  {
    "spanish": "Encontrar",
    "english": "To find"
  },
  {
    "spanish": "Mostrar",
    "english": "To show"
  },
  {
    "spanish": "Explicar",
    "english": "To explain"
  },
  {
    "spanish": "Necesitar",
    "english": "To need"
  },
  {
    "spanish": "Querer",
    "english": "To want"
  },
  {
    "spanish": "Poder",
    "english": "To be able to"
  },
  {
    "spanish": "Deber",
    "english": "To must/should"
  },
  {
    "spanish": "Vivir",
    "english": "To live"
  },
  {
    "spanish": "Morir",
    "english": "To die"
  },
  {
    "spanish": "Nacer",
    "english": "To be born"
  },
  {
    "spanish": "Crecer",
    "english": "To grow"
  },
  {
    "spanish": "Cambiar",
    "english": "To change"
  },
  {
    "spanish": "Mejorar",
    "english": "To improve"
  },
  {
    "spanish": "Empeorar",
    "english": "To worsen"
  },
  {
    "spanish": "Aceptar",
    "english": "To accept"
  },
  {
    "spanish": "Rechazar",
    "english": "To reject"
  },
  {
    "spanish": "Invitar",
    "english": "To invite"
  },
  {
    "spanish": "Ofrecer",
    "english": "To offer"
  },
  {
    "spanish": "Pedir",
    "english": "To ask for/order"
  },
  {
    "spanish": "Sugjerir",
    "english": "To suggest"
  },
  {
    "spanish": "Recomendar",
    "english": "To recommend"
  },
  {
    "spanish": "Aconsejar",
    "english": "To advise"
  },
  {
    "spanish": "Confirmar",
    "english": "To confirm"
  },
  {
    "spanish": "Cancelar",
    "english": "To cancel"
  },
  {
    "spanish": "Reservar",
    "english": "To reserve"
  },
  {
    "spanish": "Alquilar",
    "english": "To rent"
  },
  {
    "spanish": "Prestar",
    "english": "To lend"
  },
  {
    "spanish": "Pedir prestado",
    "english": "To borrow"
  },
  {
    "spanish": "Devolver",
    "english": "To return (something)"
  },
  {
    "spanish": "Volver",
    "english": "To return (to a place)"
  },
  {
    "spanish": "Llegar",
    "english": "To arrive"
  },
  {
    "spanish": "Salir",
    "english": "To leave"
  },
  {
    "spanish": "Entrar",
    "english": "To enter"
  },
  {
    "spanish": "Cerrar",
    "english": "To close"
  },
  {
    "spanish": "Abrir",
    "english": "To open"
  },
  {
    "spanish": "Empujar",
    "english": "To push"
  },
  {
    "spanish": "Tirar",
    "english": "To pull/throw"
  },
  {
    "spanish": "Encender",
    "english": "To turn on/light up"
  },
  {
    "spanish": "Apagar",
    "english": "To turn off"
  },
  {
    "spanish": "Limpiar",
    "english": "To clean"
  },
  {
    "spanish": "Ensuciar",
    "english": "To dirty"
  },
  {
    "spanish": "Reparar",
    "english": "To repair"
  },
  {
    "spanish": "Construir",
    "english": "To build"
  },
  {
    "spanish": "Destruir",
    "english": "To destroy"
  },
  {
    "spanish": "Crear",
    "english": "To create"
  },
  {
    "spanish": "Destacar",
    "english": "To stand out"
  },
  {
    "spanish": "Incluir",
    "english": "To include"
  },
  {
    "spanish": "Excluir",
    "english": "To exclude"
  },
  {
    "spanish": "Compartir",
    "english": "To share"
  },
  {
    "spanish": "Dividir",
    "english": "To divide"
  },
  {
    "spanish": "Unir",
    "english": "To unite"
  },
  {
    "spanish": "Separar",
    "english": "To separate"
  },
  {
    "spanish": "Combinar",
    "english": "To combine"
  },
  {
    "spanish": "Mezclar",
    "english": "To mix"
  },
  {
    "spanish": "Preparar",
    "english": "To prepare"
  },
  {
    "spanish": "Cocinar",
    "english": "To cook"
  },
  {
    "spanish": "Servir",
    "english": "To serve"
  },
  {
    "spanish": "Degustar",
    "english": "To taste"
  },
  {
    "spanish": "Disfrutar",
    "english": "To enjoy"
  },
  {
    "spanish": "Celebrar",
    "english": "To celebrate"
  },
  {
    "spanish": "Felicitar",
    "english": "To congratulate"
  },
  {
    "spanish": "Agradecer",
    "english": "To thank"
  },
  {
    "spanish": "Pedir perdón",
    "english": "To apologize"
  },
  {
    "spanish": "Reír",
    "english": "To laugh"
  },
  {
    "spanish": "Sonreír",
    "english": "To smile"
  },
  {
    "spanish": "Llorar",
    "english": "To cry"
  },
  {
    "spanish": "Gritar",
    "english": "To shout"
  },
  {
    "spanish": "Susurrar",
    "english": "To whisper"
  },
  {
    "spanish": "Callar",
    "english": "To be quiet"
  },
  {
    "spanish": "Escuchar",
    "english": "To listen"
  },
  {
    "spanish": "Mirar",
    "english": "To look"
  },
  {
    "spanish": "Observar",
    "english": "To observe"
  },
  {
    "spanish": "Ver",
    "english": "To see"
  },
  {
    "spanish": "Tocar",
    "english": "To touch/play (instrument)"
  },
  {
    "spanish": "Oler",
    "english": "To smell"
  },
  {
    "spanish": "Probar",
    "english": "To taste/try"
  },
  {
    "spanish": "Sentir",
    "english": "To feel"
  },
  {
    "spanish": "Percibir",
    "english": "To perceive"
  },
  {
    "spanish": "Pensar",
    "english": "To think"
  },
  {
    "spanish": "Creer",
    "english": "To believe"
  },
  {
    "spanish": "Saber",
    "english": "To know"
  },
  {
    "spanish": "Conocer",
    "english": "To know (person/place)"
  },
  {
    "spanish": "Recordar",
    "english": "To remember"
  },
  {
    "spanish": "Olvidar",
    "english": "To forget"
  },
  {
    "spanish": "Imaginar",
    "english": "To imagine"
  },
  {
    "spanish": "Soñar",
    "english": "To dream"
  },
  {
    "spanish": "Decidir",
    "english": "To decide"
  },
  {
    "spanish": "Elegir",
    "english": "To choose"
  },
  {
    "spanish": "Planear",
    "english": "To plan"
  },
  {
    "spanish": "Organizar",
    "english": "To organize"
  },
  {
    "spanish": "Gestionar",
    "english": "To manage"
  },
  {
    "spanish": "Dirigir",
    "english": "To direct/manage"
  },
  {
    "spanish": "Liderar",
    "english": "To lead"
  },
  {
    "spanish": "Colaborar",
    "english": "To collaborate"
  },
  {
    "spanish": "Ayudar",
    "english": "To help"
  },
  {
    "spanish": "Apoyar",
    "english": "To support"
  },
  {
    "spanish": "Proteger",
    "english": "To protect"
  },
  {
    "spanish": "Defender",
    "english": "To defend"
  },
  {
    "spanish": "Atacar",
    "english": "To attack"
  },
  {
    "spanish": "Rescatar",
    "english": "To rescue"
  },
  {
    "spanish": "Salvar",
    "english": "To save"
  },
  {
    "spanish": "Curar",
    "english": "To cure"
  },
  {
    "spanish": "Tratar",
    "english": "To treat"
  },
  {
    "spanish": "Cuidar",
    "english": "To care for"
  },
  {
    "spanish": "Amar",
    "english": "To love"
  },
  {
    "spanish": "Odiar",
    "english": "To hate"
  },
  {
    "spanish": "Gustar",
    "english": "To like"
  },
  {
    "spanish": "Disgustar",
    "english": "To dislike"
  },
  {
    "spanish": "Preferir",
    "english": "To prefer"
  },
  {
    "spanish": "Esperar",
    "english": "To hope/wait"
  },
  {
    "spanish": "Desear",
    "english": "To wish/desire"
  },
  {
    "spanish": "Necesitar",
    "english": "To need"
  },
  {
    "spanish": "Querer",
    "english": "To want"
  },
  {
    "spanish": "Poder",
    "english": "To be able to"
  },
  {
    "spanish": "Deber",
    "english": "To should/must"
  },
  {
    "spanish": "Tener que",
    "english": "To have to"
  }
];

let currentIndex = 0;
let showingFront = true;

const frontText = document.getElementById("frontText");
const backText = document.getElementById("backText");
const flashcard = document.getElementById("flashcard");

function updateCard() {
  const card = flashcards[currentIndex];
  frontText.textContent = card.spanish;
  backText.textContent = card.english;
  showingFront = true;
  backText.style.display = "none";
  frontText.style.display = "block";
}

function flipCard() {
  showingFront = !showingFront;
  frontText.style.display = showingFront ? "block" : "none";
  backText.style.display = showingFront ? "none" : "block";
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

flashcard.addEventListener("click", flipCard);
updateCard();
