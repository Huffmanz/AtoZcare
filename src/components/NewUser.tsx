import { stat } from "fs";
import { useState } from "react";
import { api } from "~/utils/api";


export default function NewUser(
    {name, onSave}:
    {name:string; 
     onSave: (provider: {name: string, address1: string, address2: string, address3: string, city:string, state: string, zip:string }) => void
    }) {
    
    const [providerName, setProviderName] = useState<string>("");
    const [addressline1, setAddressLine1] = useState<string>("");
    const [addressline2, setAddressLine2] = useState<string>("");
    const [addressline3, setAddressLine3] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [zip, setZip] = useState<string>("");
  return (
<div className="hero h-screen items-start">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Hello There, {name}</h1>
      <p className="py-6 text-xl text-white">It looks like you might be new... let start by gathering some information about your Daycare</p>
    </div>
    <div className="card flex-shrink-0 pl-10 pr-10 w-[60vh] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Daycare Name</span>
          </label>
          <input type="text" placeholder="Daycare Name" value={providerName} onChange={(e) => setProviderName(e.currentTarget.value)} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address Line 1</span>
          </label>
          <input type="text" placeholder="Address Line 1" className="input input-bordered"  value={addressline1} onChange={(e) => setAddressLine1(e.currentTarget.value)}  />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Address Line 2</span>
          </label>
          <input type="text" placeholder="Address Line 2" className="input input-bordered"  value={addressline2} onChange={(e) => setAddressLine2(e.currentTarget.value)} />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Address Line 3</span>
          </label>
          <input type="text" placeholder="Address Line 3" className="input input-bordered"  value={addressline3} onChange={(e) => setAddressLine3(e.currentTarget.value)} />
        </div>


        <div className="flex">
            <div className="flex-grow pr-2">
                <label className="label">
                    <span className="label-text">City</span>
                </label>
                <input type="text" placeholder="City" className="input input-bordered"  value={city} onChange={(e) => setCity(e.currentTarget.value)}/>
                </div>
            <div className="flex-grow w-1/4 ">
                <label className="label">
                    <span className="label-text">State</span>
                </label>
                <input type="text" placeholder="State" className="input input-bordered w-20 "  value={state} onChange={(e) => setState(e.currentTarget.value)}/>
            </div>
            <div className="flex-grow w-1/4 ">
                <label className="label">
                    <span className="label-text">Zip</span>
                </label>
                <input type="text" placeholder="Zip" className="input input-bordered w-20 "  value={zip} onChange={(e) => setZip(e.currentTarget.value)} />
            </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" 
                  onClick={() => {
                onSave({
                    name: providerName,
                    address1: addressline1,
                    address2: addressline2,
                    address3: addressline3,
                    city,
                    state,
                    zip
                })
            }}
            >
                Continue
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
