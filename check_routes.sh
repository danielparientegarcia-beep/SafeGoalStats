#!/bin/bash

BASE="/var/www/html/safegoalstats"

echo "🔍 Analizando rutas en: $BASE"
echo "--------------------------------------------"

echo ""
echo "📁 Buscando '/safegoalstats/'..."
grep -R "/safegoalstats/" $BASE

echo ""
echo "📁 Buscando rutas absolutas '/pages/'..."
grep -R "\"/pages/" $BASE

echo ""
echo "📁 Buscando fetch a API..."
grep -R "fetch(" $BASE

echo ""
echo "📁 Buscando window.location.href..."
grep -R "window.location.href" $BASE

echo ""
echo "📁 Buscando href hardcodeado..."
grep -R "href=" $BASE

echo ""
echo "📁 Buscando localhost (errores típicos antiguos)..."
grep -R "localhost" $BASE

echo ""
echo "📁 Buscando posibles rutas rotas '/index.html'..."
grep -R "/index.html" $BASE

echo ""
echo "✅ Análisis completado"
