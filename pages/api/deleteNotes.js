export default async function deleteNotesHandler(req, res, id) {
  try {
    const response = await (
      await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`
      )
    ).json();
    res.status(200).json({ message: "Note added successfully" });
  } catch (error) {}
}
