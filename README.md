# ArmijoCalendari
Faré una taula de 7 per 7 cel·les, les quals estan totes buides. La primera fila té etiquetes th, ja que és aquí on posarem els noms dels dies de la setmana. Les altres sis files les ocuparem amb els números corresponents als dies del mes. Totes les cel·les estan buides, ja que les emplenarem mitjançant javascript.
Cada fila té un "id" amb un número (filaN); això ens simplificarà el codi javascript quan hàgim de buscar el número corresponent a cada cel·la.

En primer lloc buscaré el dia de la setmana del dia 1 del mes. A partir d'aquí buscaré quin dia li correspon a la primera cel·la de la primera fila, i anire onplint files i columnes amb dies consecutius. Amb la funció getDay trobaré en quin dia de la setmana comença, així podré omplir la taula amb els dies ordenats.

En una etapa més avançada podria afegir botons els quals canviaran el mes.