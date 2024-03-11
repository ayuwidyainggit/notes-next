// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function notesHandler(req, res) {
  // res.status(200).json({ name: "John Doe" });
  try {
    const response = await (
      await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes")
    ).json();
    res.status(200).json({ ...response });
  } catch (error) {}
}
