"use client"

import { useState, useMemo } from "react"
import { products } from "@/data/products"
import { useCart } from "@/hooks/use-cart"
import { SearchBar } from "@/components/search-bar"
import { ProductCard } from "@/components/product-card"
import { CartSidebar } from "@/components/cart-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export default function EcommercePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const cart = useCart()

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-gradient-to-r from-primary/10 via-background to-secondary/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.png"
                  alt="Roxana Aromaterapia Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:text-foreground">
                  Roxana Aromaterapia
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <CartSidebar
                items={cart.items}
                totalItems={cart.totalItems}
                totalPrice={cart.totalPrice}
                onUpdateQuantity={cart.updateQuantity}
                onRemoveItem={cart.removeItem}
                onClearCart={cart.clearCart}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 py-12 mb-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/images/logo.png" alt="Roxana Aromaterapia Logo" fill className="object-contain" priority />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tu regalería de confianza, <span className="text-primary">a la vuelta de casa</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-6">
              Ideas originales, productos artesanales y regalos para todos los gustos. Pasá, elegí y sorprendete.
            </p>

            {/* Redes Sociales */}
            <div className="flex justify-center md:justify-start items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Seguinos en:</span>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary/10 border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/roxana_aromaterapia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Síguenos en Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary/10 border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/roxana.aromaterapia"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Síguenos en Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary/10 border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.tiktok.com/@roxanaaromaterapi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Síguenos en TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6">
        <SearchBar
          onSearch={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Products Grid */}
      <main className="container mx-auto px-4 pb-8">
        <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
          <h2 className="text-2xl font-semibold mb-2">
            {selectedCategory === "all"
              ? "Todos los productos"
              : selectedCategory === "essential-oils"
                ? "Aceites Esenciales"
                : selectedCategory === "diffusers"
                  ? "Difusores"
                  : selectedCategory === "candles"
                    ? "Velas Aromáticas"
                    : selectedCategory === "cosmetics"
                      ? "Cosméticos Naturales"
                      : selectedCategory === "bath-salts"
                        ? "Sales de Baño"
                        : selectedCategory === "soaps"
                          ? "Jabones Artesanales"
                          : selectedCategory === "kits"
                            ? "Kits"
                            : selectedCategory === "sprays"
                              ? "Sprays"
                              : "Productos"}
          </h2>
          <p className="text-muted-foreground">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-muted/50 rounded-lg">
            <p className="text-lg text-muted-foreground">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={cart.addItem} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}