export function HeroSection () {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                src="https://images.unsplash.com/photo-1606619788423-005922947e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MDIzOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional veterinarian"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            </div>
        </section>
    )
}