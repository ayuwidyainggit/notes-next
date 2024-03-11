export default async function editNotesHandler(req, res) {
  try {
    const { editNoteId } = req.query;
    const { title, description } = req.body; // Assuming you're sending title and description in the request body

    const response = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${editNoteId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error editing note:", error);
    res.status(500).json({ error: "Unable to edit note" });
  }
}
