export default async function deleteNoteshandler(req, res) {
  try {
    const { id } = req.query;
    const response = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Unable to delete note" });
  }
}
