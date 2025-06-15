class ModelLoaderExtension {
  getInfo() {
    return {
      id: 'modellader',
      name: '3D Modell Ladehilfe',
      blocks: [
        {
          opcode: 'ladeModell',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Lade 3D-Modell von [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com/model.json'
            }
          }
        }
      ]
    };
  }

  async ladeModell(args) {
    const url = args.URL;
    try {
      const res = await fetch(url);
      const data = await res.json();
      // Beispielausgabe: Ersetze das hier durch z. B. Simple3D-Blockaufrufe
      for (const obj of data) {
        console.log(`Würfel bei: x=${obj.x}, y=${obj.y}, z=${obj.z}`);
        // Hier könnte man z. B. Simple3D Blöcke simulieren
        // Beispiel: simple3d.addCube(obj.x, obj.y, obj.z, obj.size);
      }
    } catch (e) {
      console.error('Modell konnte nicht geladen werden:', e);
    }
  }
}

Scratch.extensions.register(new ModelLoaderExtension());
