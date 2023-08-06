// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const url = 'https://send.api.mailtrap.io/api/send';
  const bodyData = {
    "to": [
      {
        "email": "md.karim@codeclouds.com",
        "name": "Md Karim"
      }
    ],
    "from": {
      "email": "md.karim@codeclouds.com",
      "name": "Md Karim"
    },
    "subject": "Customer Query Write In",
    "text": "Customer Name: " + req.body.name + " | Email: " + req.body.email + " | Phone: " + req.body.phone + " | Query: " + req.body.message,
    "category": "Hira Plaza Customer Query"
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Api-Token': 'dec28776405570783e4b840623c4ebd2',
    },
    body: JSON.stringify(bodyData)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
