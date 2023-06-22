#define rele 13
#define som 12

bool estadoRele = false;

void setup(){
    pinMode(rele, OUTPUT);
    pinMode(som, INPUT);
    digitalWrite(rele, estadoRele);
}

void loop(){
    if (digitalRead(som) == HIGH)
    {
        estadoRele = !estadoRele;
    }

    digitalWrite(rele, estadoRele);
}