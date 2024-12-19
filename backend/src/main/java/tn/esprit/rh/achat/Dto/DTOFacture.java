package tn.esprit.rh.achat.Dto;

import java.util.Date;
import java.util.Set;


import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.DetailFacture;
import tn.esprit.rh.achat.entities.Fournisseur;
import tn.esprit.rh.achat.entities.Reglement;

@Getter
@Setter
public class DTOFacture {

	private Long idFacture;
	private float montantRemise;
	private float montantFacture;
	private Date dateCreationFacture;
	private Date dateDerniereModificationFacture;
	private Boolean archivee;
	private Set<DetailFacture> detailsFacture;
    private Fournisseur fournisseur;
    private Set<Reglement> reglements;

    public DTOFacture(float montantRemise, float montantFacture, Date dateCreationFacture, Date dateDerniereModificationFacture
    		,Boolean archivee, Set<DetailFacture> detailsFacture) {
        super();
        this.montantRemise = montantRemise;
        this.montantFacture = montantFacture;
        this.dateCreationFacture = dateCreationFacture;
        this.dateDerniereModificationFacture = dateDerniereModificationFacture;
        this.archivee = archivee;
        this.detailsFacture = detailsFacture;

    }
}