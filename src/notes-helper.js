export const findNote = (notes = [], noteId) =>
  notes.find(note => note.id === noteId)


export const findFolder = (folders = [], folderId) =>
  folders.find(folder => folder.id === folderId)