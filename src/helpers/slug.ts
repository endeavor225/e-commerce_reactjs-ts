
export const slugify = (name: string): string => {
    let baseSlug = name
        .toLowerCase() // Convertir le texte en minuscules
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/[^\w-]+/g, '') // Supprimer les caractères non alphanumériques et non tirets
        .replace(/--+/g, '-') // Remplacer les doubles tirets par un seul tiret
        .trim(); // Supprimer les espaces au début et à la fin
    return baseSlug;
}


export const deslugify = (slug: string): string => {
    let name = slug
        .replace(/-/g, ' ') // Remplacer les tirets par des espaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Mettre en majuscule la première lettre de chaque mot
    return name;
}