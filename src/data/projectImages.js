const imageModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const projectImagesById = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .reduce((images, [path, src]) => {
    const match = path.match(/\.\.\/assets\/([^/]+)\//)
    if (!match) return images

    const projectId = match[1]
    images[projectId] ??= []
    images[projectId].push({
      src,
      alt: `${projectId} screenshot ${images[projectId].length + 1}`,
    })

    return images
  }, {})
